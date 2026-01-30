const app = document.getElementById('app');
const CART_KEY = 'minishop_cart_v1';

let state = {
  products: [],
  cart: JSON.parse(localStorage.getItem(CART_KEY) || '[]')
};

function saveCart(){
  localStorage.setItem(CART_KEY, JSON.stringify(state.cart));
  updateCartCount();
}

function updateCartCount(){
  const countEl = document.getElementById('cart-count');
  const totalQty = state.cart.reduce((s,i)=>s+i.qty,0);
  if(countEl) countEl.textContent = totalQty;
}

async function loadProducts(){
  const res = await fetch('src/api/products.json');
  state.products = await res.json();
}

function findProduct(id){ return state.products.find(p=>p.id===Number(id)); }

function formatPrice(v){ return '$'+v.toFixed(2); }

function createProductCard(p){
  const div = document.createElement('div');
  div.className = 'col-sm-6 col-md-4 col-lg-3 mb-4';
  div.innerHTML = `
    <div class="card product-card h-100">
      <img src="${p.image}" class="card-img-top product-image" alt="${p.title}">
      <div class="card-body d-flex flex-column">
        <h6 class="card-title">${p.title}</h6>
        <p class="mb-1 price">${formatPrice(p.price)}</p>
        <p class="mb-2 small text-muted rating">⭐ ${p.rating}</p>
        <div class="mt-auto d-flex justify-content-between align-items-center">
          <a href="#/product/${p.id}" class="btn btn-sm btn-outline-primary">View</a>
          <button class="btn btn-sm btn-primary add-to-cart" data-id="${p.id}">Add</button>
        </div>
      </div>
    </div>`;
  return div;
}

function renderHome(){
  app.innerHTML = `
    <div class="p-5 mb-4 bg-white rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-6">Welcome to MiniShop</h1>
        <p class="lead">A demo E-Commerce SPA with client-side routing and cart state.</p>
        <a href="#/products" class="btn btn-primary btn-lg">Browse Products</a>
      </div>
    </div>`;
}

function renderProducts(){
  const container = document.createElement('div');
  container.innerHTML = '<h3>Products</h3><div id="product-grid" class="row"></div>';
  const grid = container.querySelector('#product-grid');
  state.products.forEach(p=> grid.appendChild(createProductCard(p)));
  app.innerHTML = '';
  app.appendChild(container);
}

function renderProductDetail(id){
  const p = findProduct(id);
  if(!p) { app.innerHTML = '<p>Product not found</p>'; return }
  app.innerHTML = `
    <div class="row">
      <div class="col-md-6">
        <img src="${p.image}" class="img-fluid rounded" alt="${p.title}">
      </div>
      <div class="col-md-6">
        <h3>${p.title}</h3>
        <p class="price">${formatPrice(p.price)}</p>
        <p class="rating">⭐ ${p.rating}</p>
        <p>${p.description}</p>
        <div class="d-flex gap-2">
          <button class="btn btn-primary add-to-cart" data-id="${p.id}">Add to cart</button>
          <a href="#/products" class="btn btn-outline-secondary">Back</a>
        </div>
      </div>
    </div>`;
}

function addToCart(id, qty=1){
  const pid = Number(id);
  const existing = state.cart.find(i=>i.id===pid);
  if(existing){ existing.qty += qty; }
  else state.cart.push({id:pid, qty});
  saveCart();
}

function renderCart(){
  if(state.cart.length===0){ app.innerHTML = '<p>Your cart is empty. <a href="#/products">Browse products</a></p>'; return }
  const rows = state.cart.map(item=>{
    const p = findProduct(item.id);
    return `
      <tr>
        <td class="align-middle"><img src="${p.image}" style="height:60px;object-fit:cover"/></td>
        <td class="align-middle">${p.title}</td>
        <td class="align-middle">${formatPrice(p.price)}</td>
        <td class="align-middle"><input type="number" min="1" class="form-control qty-input" data-id="${p.id}" value="${item.qty}"/></td>
        <td class="align-middle">${formatPrice(p.price * item.qty)}</td>
        <td class="align-middle"><button class="btn btn-sm btn-danger remove-item" data-id="${p.id}">Remove</button></td>
      </tr>`;
  }).join('');

  const total = state.cart.reduce((s,i)=>{
    const p = findProduct(i.id); return s + p.price * i.qty;
  },0);

  app.innerHTML = `
    <h3>Your Cart</h3>
    <div class="table-responsive bg-white p-3 rounded shadow-sm">
      <table class="table align-middle">
        <thead><tr><th></th><th>Product</th><th>Price</th><th>Qty</th><th>Subtotal</th><th></th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
      <div class="d-flex justify-content-between align-items-center">
        <div><a class="btn btn-outline-secondary" href="#/products">Continue shopping</a></div>
        <div><strong>Total: ${formatPrice(total)}</strong> <a href="#/checkout" class="btn btn-primary ms-3">Checkout</a></div>
      </div>
    </div>`;
}

function renderCheckout(){
  const total = state.cart.reduce((s,i)=> s + findProduct(i.id).price * i.qty, 0);
  app.innerHTML = `
    <h3>Checkout</h3>
    <div class="bg-white p-4 rounded shadow-sm">
      <p class="lead">Order total: <strong>${formatPrice(total)}</strong></p>
      <form id="checkout-form">
        <div class="mb-3">
          <label class="form-label">Full name</label>
          <input class="form-control" required />
        </div>
        <div class="mb-3">
          <label class="form-label">Address</label>
          <textarea class="form-control" required></textarea>
        </div>
        <div class="mb-3">
          <label class="form-label">Payment (demo)</label>
          <input class="form-control" placeholder="Card number" required />
        </div>
        <div class="d-flex gap-2">
          <button class="btn btn-success">Place order</button>
          <a class="btn btn-outline-secondary" href="#/cart">Back to cart</a>
        </div>
      </form>
    </div>`;
}

function bindApp(){
  document.body.addEventListener('click', (e)=>{
    const atc = e.target.closest('.add-to-cart');
    if(atc){ addToCart(atc.dataset.id); e.preventDefault(); renderRoute(); return }
    const rm = e.target.closest('.remove-item');
    if(rm){ state.cart = state.cart.filter(i=>i.id!==Number(rm.dataset.id)); saveCart(); renderRoute(); return }
  });

  document.body.addEventListener('change', (e)=>{
    if(e.target.matches('.qty-input')){
      const id = Number(e.target.dataset.id);
      const qty = Math.max(1, Number(e.target.value)||1);
      const item = state.cart.find(i=>i.id===id);
      if(item){ item.qty = qty; saveCart(); renderRoute(); }
    }
  });

  document.addEventListener('submit', (e)=>{
    if(e.target.id==='checkout-form'){
      e.preventDefault(); state.cart = []; saveCart(); app.innerHTML = '<div class="alert alert-success">Thank you! Your order has been placed.</div>';
    }
  });
}

function parseHash(){
  const hash = location.hash.replace(/^#\/?, '') || '';
  return hash.split('/').filter(Boolean);
}

function renderRoute(){
  const parts = parseHash();
  if(parts.length===0) return renderHome();
  if(parts[0]==='products') return renderProducts();
  if(parts[0]==='product' && parts[1]) return renderProductDetail(parts[1]);
  if(parts[0]==='cart') return renderCart();
  if(parts[0]==='checkout') return renderCheckout();
  return renderHome();
}

async function start(){
  await loadProducts();
  bindApp();
  updateCartCount();
  window.addEventListener('hashchange', ()=> renderRoute());
  renderRoute();
}

start();
