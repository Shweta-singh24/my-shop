import React from 'react'
import { Link } from 'react-router-dom'

import { useState, useEffect } from 'react'




function Cart(){
  const [cart, setCart] = useState([])
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) 
    || []
    setCart(data)
  }, [])

  return (
   <div>
  {cart.length === 0 ? (
    <p> noooooooooooo</p>
  ):(
    cart.map((product) => (
      <div key={product.index}>
        <img className=' hover:h-45 w-full h-40  object-contain mb-2' src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>{product.price}</p>
        </div>
    ))
  )}
  </div>
   
  )
}

export default Cart
