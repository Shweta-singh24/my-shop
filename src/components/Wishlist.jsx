import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'




function Wishlist(){
  const [wishlist, setWishlist] = useState([])
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("wishlist")) 
    || []
    setWishlist(data)
  }, [])

  return (
   <div>
  {wishlist.length === 0 ? (
    <p> noooooooooooo</p>
  ):(
    wishlist.map((product) => (
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
export default Wishlist