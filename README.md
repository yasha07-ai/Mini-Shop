# E-Commerce SPA Case Study

A comprehensive demonstration of Single Page Application (SPA) architecture with two implementations:

1. **Vanilla JS SPA** — Pure JavaScript, HTML, CSS
2. **React + Vite SPA** — Modern React with component-based design (recommended)

Both showcase core SPA concepts: client-side routing, state management, responsive design, and persistent cart functionality using localStorage.

---

## Quick Start

### Vanilla JS (Root Directory)
```bash
npm install
npm run start
# Open http://localhost:8080
```

### React + Vite (Recommended)
```bash
cd react-app
npm install
npm run dev
# Open http://localhost:5173 (or displayed port)
```

---

## Features

✅ **Interactive Home** — Search & featured products  
✅ **Product Catalog** — Browse all products  
✅ **Product Details** — Full product information  
✅ **Shopping Cart** — Add/remove/update items  
✅ **Cart Persistence** — Data saved in localStorage  
✅ **Checkout Flow** — Demo order placement  
✅ **Responsive Design** — Mobile-first Bootstrap layout  
✅ **Client-Side Routing** — Fast navigation without reloads  
✅ **Real-Time Calculations** — Instant total updates  

---

## Project Structure

```
case_study/
├── index.html              # Vanilla SPA entry
├── src/
│   ├── app.js             # Router, state, logic
│   ├── styles.css         # Styles
│   └── api/products.json  # Product data
├── package.json
├── README.md
└── react-app/             # React implementation
    ├── src/
    │   ├── App.jsx
    │   ├── components/
    │   ├── context/CartContext.jsx
    │   └── data/products.json
    ├── vite.config.js
    └── package.json
```

---

## Technology Stack

**Vanilla SPA:**
- HTML5, CSS3, JavaScript (ES6+)
- Bootstrap 5, Material Icons
- Hash-based routing, localStorage

**React SPA:**
- React 18, React Router 6
- Vite 5 (build tool)
- Bootstrap 5, Material UI 5
- Context API for state

---

## Pages & Features

| Page | Vanilla | React | Features |
|------|---------|-------|----------|
| Home | ✅ | ✅ | Search, featured products |
| Products | ✅ | ✅ | Grid, cards, add to cart |
| Product Detail | ✅ | ✅ | Full info, add to cart |
| Cart | ✅ | ✅ | Edit qty, remove, total |
| Checkout | ✅ | ✅ | Form, order confirmation |

---

## Sample Product Data

8 products included (images from Picsum.photos):
- Wireless Headphones ($59.99)
- Smartphone Stand ($12.50)
- Portable Charger ($24.99)
- Mechanical Keyboard ($89.00)
- Fitness Tracker ($39.50)
- Coffee Mug ($9.99)
- Bluetooth Speaker ($45.00)
- Laptop Sleeve ($18.00)

---

## localStorage Keys

- **Vanilla:** `minishop_cart_v1`
- **React:** `minishop_react_cart_v1`

---

## Learning Outcomes

This case study demonstrates:
- SPA architecture & client-side routing
- State management & persistence
- Component-based design (React)
- Responsive layouts with Bootstrap
- Real-time UI updates
- Modern frontend tooling (Vite)
- Context API for global state

---

## Future Enhancements

- Backend API integration
- User authentication
- Real payment processing
- Product filtering/sorting
- User reviews & ratings
- Order history
- Admin dashboard
- Unit & E2E tests

---

## Notes

- All product data is static JSON (no backend required)
- Checkout is a demo (no real payments processed)
- Cart persists in browser localStorage only
- Images are demo images from Picsum.photos

---

## License

MIT
