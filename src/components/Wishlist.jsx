import React from 'react'
import { Link } from 'react-router-dom'




const Wishlist = ({wishlist}) => {
  
  
  
  return (
  <>
  {wishlist.length === 0 ? (
    <p> noooooooooooo</p>
  ):(
    wishlist.map(() => (
      <div key={Products.id}>{Products.title}</div>
    ))
  )}
  </>
  )
  }
export default Wishlist;
