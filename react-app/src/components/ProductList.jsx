import React from 'react'
import products from '../data/products.json'
import ProductCard from './ProductCard'
import { useCart } from '../context/CartContext'

export default function ProductList(){
  const { dispatch } = useCart()
  const onAdd = (id)=> dispatch({type:'add', payload:{id, qty:1}})

  return (
    <div>
      <h3>Products</h3>
      <div className="row g-3">
        {products.map(p=> (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={p.id}>
            <ProductCard p={p} onAdd={onAdd} />
          </div>
        ))}
      </div>
    </div>
  )
}
