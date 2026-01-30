import React from 'react'
import { useCart } from '../context/CartContext'
import products from '../data/products.json'

export default function Checkout(){
  const { cart, dispatch } = useCart()
  const total = cart.reduce((s,i)=> s + products.find(p=>p.id===i.id).price * i.qty, 0)

  function handleSubmit(e){
    e.preventDefault()
    dispatch({type:'clear'})
    alert('Thank you! Your order has been placed (demo).')
  }

  return (
    <div>
      <h3>Checkout</h3>
      <div className="bg-white p-4 rounded shadow-sm">
        <p className="lead">Order total: <strong>${total.toFixed(2)}</strong></p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Full name</label>
            <input className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <textarea className="form-control" required></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Payment (demo)</label>
            <input className="form-control" placeholder="Card number" required />
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-success">Place order</button>
          </div>
        </form>
      </div>
    </div>
  )
}
