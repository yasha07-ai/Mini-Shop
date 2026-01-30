import React from 'react'
import products from '../data/products.json'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

export default function Cart(){
  const { cart, dispatch } = useCart()
  if(cart.length===0) return <p>Your cart is empty. <Link to="/products">Browse products</Link></p>

  const rows = cart.map(item=>{
    const p = products.find(x=> x.id===item.id)
    return (
      <tr key={item.id}>
        <td><img src={p.image} alt={p.title} style={{height:60, objectFit:'cover'}}/></td>
        <td>{p.title}</td>
        <td>${p.price.toFixed(2)}</td>
        <td><input type="number" min="1" value={item.qty} onChange={(e)=> dispatch({type:'update', payload:{id:item.id, qty: Math.max(1, Number(e.target.value)||1)}})} style={{width:80}}/></td>
        <td>${(p.price * item.qty).toFixed(2)}</td>
        <td><button className="btn btn-sm btn-danger" onClick={()=> dispatch({type:'remove', payload:{id:item.id}})}>Remove</button></td>
      </tr>
    )
  })

  const total = cart.reduce((s,i)=> s + products.find(p=>p.id===i.id).price * i.qty, 0)

  return (
    <div>
      <h3>Your Cart</h3>
      <div className="table-responsive bg-white p-3 rounded shadow-sm">
        <table className="table align-middle">
          <thead><tr><th></th><th>Product</th><th>Price</th><th>Qty</th><th>Subtotal</th><th></th></tr></thead>
          <tbody>{rows}</tbody>
        </table>
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/products" className="btn btn-outline-secondary">Continue shopping</Link>
          <div><strong>Total: ${total.toFixed(2)}</strong> <Link to="/checkout" className="btn btn-primary ms-3">Checkout</Link></div>
        </div>
      </div>
    </div>
  )
}
