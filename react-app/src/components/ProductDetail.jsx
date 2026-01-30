import React from 'react'
import { useParams, Link } from 'react-router-dom'
import products from '../data/products.json'
import { useCart } from '../context/CartContext'

export default function ProductDetail(){
  const { id } = useParams()
  const p = products.find(x=> x.id === Number(id))
  const { dispatch } = useCart()
  if(!p) return <p>Product not found</p>
  return (
    <div className="row">
      <div className="col-md-6">
        <img src={p.image} alt={p.title} className="img-fluid rounded" />
      </div>
      <div className="col-md-6">
        <h3>{p.title}</h3>
        <p className="lead">${p.price.toFixed(2)}</p>
        <p>{p.description}</p>
        <div className="d-flex gap-2">
          <button className="btn btn-primary" onClick={()=> dispatch({type:'add', payload:{id:p.id, qty:1}})}>Add to cart</button>
          <Link to="/products" className="btn btn-outline-secondary">Back</Link>
        </div>
      </div>
    </div>
  )
}
