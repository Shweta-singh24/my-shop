import React from 'react'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import FlipkartExplore from './Flipkart-explore-plus.png'



const Navbar = () => {
  const [products2, setProducts2] = useState([])
      useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then ((res) => res.json())
        .then((data) => setProducts2(data))
      }, [])
  

  return (
    <>
    <div className='flex gap-4 justify-center px-3 py-3'>
      <img src={FlipkartExplore} alt='flipkart logo' className='w-24 h-auto'/>
          <input className='border-rounded w-200 h-auto px-2 bg-blue-50' type='search' placeholder="Search For Products, Brands and More" />
          <Link className='px-3 py-3 hover:text-lg' to="/whistlist">Whistlist</Link>
          <Link className='hover:text-lg px-3 py-3' to="/products">Products</Link>
         </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 shadow-md hover:shadow-lg transition'>
      {products2.map((product2) =>(
        <><div className='px-3 py-2 '><img  key={product2.id} className=' hover:h-45 w-full h-40 w-full  object-contain mb-2' src={product2.image} alt={product2.title} /><h2 className='text-lg font-bold'>{product2.title}</h2><p className='text-lg text-gray-800'>Price:{product2.price}</p>
        <button className=' bg-blue-500 p-2 text-white rounded'>Add To Wishlist</button></div></>
      ))}
    </div>

        
    
    </>
  )
}

export default Navbar
