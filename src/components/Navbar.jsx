import React from 'react'
import { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import FlipkartExplore from './Flipkart-explore-plus.png'



const Navbar = () => {
  
  return (
    <>
    <div className='flex gap-4 justify-center px-3 py-3'>
      <img src={FlipkartExplore} alt='flipkart logo' className='w-24 h-auto'/>
          <input className='border-rounded w-200 h-auto px-2 bg-blue-50' type='search' placeholder="Search For Products, Brands and More" />

        <Link className='px-3 py-3' to="/whistlist">Whistlist</Link>
        <Link className=' px-3 py-3' to="/products">Products</Link>
    </div>
    </>
  )
}

export default Navbar
