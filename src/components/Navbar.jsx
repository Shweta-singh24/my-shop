import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import FlipkartExplore from './Flipkart-explore-plus.png'



const Navbar = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])


  return (
    <>
      <div className='flex gap-5 justify-center px-3 py-3'>
        <img src={FlipkartExplore} alt='flipkart logo' className='w-24 h-auto' />
        <input className='border-rounded w-200 h-auto px-2 bg-blue-50' type='search' placeholder="Search For Products, Brands and More" />
        <Link className='flex justify-center items-center' to="/whistlist"><lord-icon
          src="https://cdn.lordicon.com/uppnozfl.json"
          trigger="hover"
          stroke="bold">
        </lord-icon>Wishlist</Link>
        <Link className='flex justify-center items-center' to="/Cart"><lord-icon
          src="https://cdn.lordicon.com/ggirntso.json"
          trigger="hover"
          stroke="bold">
        </lord-icon>Cart</Link>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 shadow-md hover:shadow-lg transition'>
        {products.map((product) => (
          <><div className='px-3 py-2 '><img key={product.id} className=' hover:h-45 w-full h-40  object-contain mb-2' src={product.image} alt={product.title} /><button><lord-icon
            src="https://cdn.lordicon.com/ggirntso.json"
            trigger="hover"
            stroke="bold">
          </lord-icon></button><h2 className='text-lg font-bold'>{product.title}</h2><p className='text-lg text-gray-800'>Price:{product.price}</p>
            <button className='hover:bg-blue-400 bg-blue-500 p-2 text-white rounded'>Add To Wishlist</button></div></>
        ))}
      </div>



    </>
  )
}

export default Navbar
