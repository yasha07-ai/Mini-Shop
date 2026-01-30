import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import { useCart } from './context/CartContext'
import products from './data/products.json'
import ProductCard from './components/ProductCard'

function Navbar(){
  const { cart } = useCart()
  const totalQty = cart.reduce((s,i)=> s + i.qty, 0)
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">MiniShop</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link position-relative" to="/cart">Cart <span className="badge bg-danger ms-1">{totalQty}</span></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

function Home(){
  const [q, setQ] = React.useState('')
  const { dispatch } = useCart()
  const featured = products.slice(0,8).filter(p => p.title.toLowerCase().includes(q.toLowerCase()) || p.description.toLowerCase().includes(q.toLowerCase()))

  const onAdd = (id)=> dispatch({type:'add', payload:{id, qty:1}})

  return (
    <div>
      <div className="p-5 mb-4 bg-white rounded-3">
        <div className="container-fluid py-4">
          <h1 className="display-6">Welcome to MiniShop</h1>
          <p className="lead">Find great products at demo prices — explore, search, and add to cart.</p>
          <div className="d-flex gap-2 mt-3">
            <input className="form-control" placeholder="Search products..." value={q} onChange={e=>setQ(e.target.value)} />
            <Link to="/products" className="btn btn-outline-primary">All Products</Link>
          </div>
        </div>
      </div>

      <section>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4>Featured</h4>
          <small className="text-muted">Showing {featured.length} result(s)</small>
        </div>
        <div className="row g-3">
          {featured.map(p=> (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={p.id}>
              <ProductCard p={p} onAdd={onAdd} />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default function App(){
  return (
    <div>
      <Navbar />
      <main className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
      <footer className="bg-light py-3">
        <div className="container text-center small">© MiniShop - Demo SPA</div>
      </footer>
    </div>
  )
}
