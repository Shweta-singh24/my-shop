import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='bg-blue-600 flex justify-center gap-20'>
      <Link to="/home" >Home</Link>
      <Link to="/whistlist">Whistlist</Link>
      <Link to="/products">Products</Link>
    </div>
  )
}

export default Navbar
