# MiniShop React SPA

A modern e-commerce Single Page Application built with **React 18**, **Vite**, **Bootstrap 5**, and **Material UI**.

---

## Screenshots

### Home Page
![Home Page](../screenshots/home.png)
*Interactive home with real-time search and featured products grid*

### Product Listing
![Product Listing](../screenshots/products.png)
*Responsive product grid with hover effects*

### Product Details
![Product Details](../screenshots/product-detail.png)
*Complete product information with add to cart functionality*

### Shopping Cart
![Shopping Cart](../screenshots/cart.png)
*Cart management with quantity updates and totals*

### Checkout Flow
![Checkout](../screenshots/checkout.png)
*Demo order form with validation*

---

## Features

✅ **Interactive Home** — Real-time search + featured products grid  
✅ **Product Listing** — Responsive grid with hover effects  
✅ **Product Details** — Full product information pages  
✅ **Shopping Cart** — Add, remove, update quantities  
✅ **Cart Persistence** — Data saved in browser localStorage  
✅ **Checkout Flow** — Demo order form  
✅ **Responsive Design** — Works on all devices  
✅ **Fast Performance** — Vite dev server & build  

---

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server (hot reload enabled)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Dev server runs at **http://localhost:5173** (or next available port)

---

## Project Structure

```
react-app/
├── src/
│   ├── App.jsx                   # Main app with routes
│   ├── main.jsx                  # React entry point
│   ├── index.css                 # Global styles
│   ├── components/
│   │   ├── ProductList.jsx       # All products
│   │   ├── ProductCard.jsx       # Reusable product card
│   │   ├── ProductDetail.jsx     # Single product
│   │   ├── Cart.jsx              # Shopping cart
│   │   └── Checkout.jsx          # Order form
│   ├── context/
│   │   └── CartContext.jsx       # Global cart state
│   └── data/
│       └── products.json         # Sample products
├── index.html                    # Vite template
├── vite.config.js               # Vite config
├── package.json                 # Dependencies
└── .gitignore                   # Git exclusions
```

---

## Component Architecture

### CartContext.jsx
Global state management using React Context + useReducer:
- **init** — Initialize from localStorage
- **add** — Add/increment cart item
- **update** — Update item quantity
- **remove** — Remove item from cart
- **clear** — Empty cart (on order)

### App.jsx
Main component with:
- **Navbar** — Logo, navigation links, cart count badge
- **Home** — Hero, search bar, featured products
- **Routes** — React Router v6 hash routing

### Component Hierarchy
```
App
├── Navbar (cart count)
└── Routes
    ├── Home (search + featured)
    ├── ProductList (grid)
    ├── ProductDetail (single)
    ├── Cart (items + checkout btn)
    └── Checkout (form)
```

---

## Technology Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 18.2 | UI library |
| React Router | 6.14 | Client-side routing |
| Vite | 5.1 | Build tool & dev server |
| Bootstrap | 5.3 | CSS framework |
| Material UI | 5.14 | Component library |
| Emotion | 11.11 | CSS-in-JS |

---

## Key Features

### Interactive Home
- **Hero Section** — Welcome message & call-to-action
- **Search Bar** — Real-time filter featured products
- **Featured Grid** — 8 product cards with hover effects
- **Result Count** — Shows matching products

### Product Cards
- Product image (with placeholder handling)
- Title & price
- Star rating
- "View" & "Add to Cart" buttons
- Hover animation (lift effect)

### Cart Management
- **Add Items** — From product grid or detail page
- **Update Quantity** — Inline input field
- **Remove Items** — Per-item remove button
- **Real-Time Totals** — Subtotal + grand total
- **Persistence** — localStorage keeps data across sessions

### Responsive Layout
- Mobile-first design
- Breakpoints: 576px, 768px, 992px, 1200px
- Bootstrap grid (1-4 columns)
- Touch-friendly buttons & inputs

---

## Sample Data

8 products with:
- ID, title, price, rating
- Full description
- Demo images from Picsum.photos

Example:
```json
{
  "id": 1,
  "title": "Wireless Headphones",
  "price": 59.99,
  "rating": 4.5,
  "image": "https://picsum.photos/id/180/600/400",
  "description": "Comfortable wireless headphones..."
}
```

---

## State Management

### Cart State Shape
```javascript
[
  { id: 1, qty: 2 },
  { id: 3, qty: 1 }
]
```

### localStorage Key
```
minishop_react_cart_v1
```

---

## Pages

| Route | Component | Features |
|-------|-----------|----------|
| `/` | Home | Search, featured products |
| `/products` | ProductList | Full product grid |
| `/product/:id` | ProductDetail | Single product view |
| `/cart` | Cart | Edit cart, checkout button |
| `/checkout` | Checkout | Order form, confirmation |

---

## Development Workflow

```bash
# Start dev server (includes HMR)
npm run dev

# Build production bundle
npm run build

# Preview built app locally
npm run preview

# (Optional) Check syntax
npm run lint
```

---

## Performance Optimizations

- **Code Splitting** — Route-based lazy loading ready
- **Fast Refresh** — Instant updates during development
- **Optimized Builds** — Minified & tree-shaken production bundles
- **Asset Optimization** — Vite handles image optimization

---

## Browser Support

✅ Modern browsers (Chrome, Firefox, Safari, Edge)  
✅ Mobile browsers (iOS Safari, Chrome Mobile)  
✅ ES2020+ JavaScript features

---

## localStorage Persistence

Cart data automatically:
- **Loads** on app startup
- **Saves** on every cart change
- **Persists** across browser sessions
- **Syncs** in real-time across tabs (same domain)

---

## Future Enhancements

- **Backend Integration** — Connect to REST API
- **Authentication** — User login & registration
- **Product Filters** — By price, rating, category
- **Advanced Search** — Full-text search & facets
- **Order History** — Track past purchases
- **Wishlist** — Save favorites
- **Reviews & Ratings** — User-generated content
- **Payment Integration** — Stripe/PayPal
- **Dark Mode** — Theme toggle
- **i18n** — Multi-language support
- **Tests** — Jest + React Testing Library
- **Analytics** — Google Analytics integration

---

## Common Issues & Solutions

### Port already in use?
```bash
# Vite auto-increments port (5173 → 5174 → ...)
npm run dev  # Will use next available port
```

### localStorage not working?
- Check browser privacy settings
- Clear browser cache if needed
- Works in incognito mode

### Images not loading?
- Picsum.photos is a public demo service
- Replace image URLs in `src/data/products.json` for production

---

## Notes

- **No Backend** — All data is static JSON
- **Demo Checkout** — Does not process real payments
- **Demo Images** — From Picsum.photos (public service)
- **Development Only** — Not suitable for production without updates

---

## License

MIT

---

## Author

Created as an e-commerce SPA case study demonstrating modern React patterns and responsive design.
