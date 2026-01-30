import React, { createContext, useContext, useEffect, useReducer } from 'react'

const CartContext = createContext(null)
const CART_KEY = 'minishop_react_cart_v1'

function reducer(state, action){
  switch(action.type){
    case 'init': return action.payload || []
    case 'add': {
      const found = state.find(i=>i.id===action.payload.id)
      if(found){ return state.map(i=> i.id===action.payload.id ? {...i, qty: i.qty + action.payload.qty} : i) }
      return [...state, {id: action.payload.id, qty: action.payload.qty}]
    }
    case 'update': return state.map(i=> i.id===action.payload.id ? {...i, qty: action.payload.qty} : i)
    case 'remove': return state.filter(i=> i.id!==action.payload.id)
    case 'clear': return []
    default: return state
  }
}

export function CartProvider({children}){
  const [cart, dispatch] = useReducer(reducer, [])

  useEffect(()=>{
    const raw = localStorage.getItem(CART_KEY)
    if(raw) dispatch({type:'init', payload: JSON.parse(raw)})
  },[])

  useEffect(()=>{
    localStorage.setItem(CART_KEY, JSON.stringify(cart))
  },[cart])

  const value = { cart, dispatch }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart(){
  const ctx = useContext(CartContext)
  if(!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
