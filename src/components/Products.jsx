import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'


const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
      .then ((res) => res.json())
      .then((data) => setProducts(data))
    }, [])

  return ( 
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 shadow-md hover:shadow-lg transition'>
      {products.map((product) =>(
        <><div className='px-3 py-2 '><img  key={product.id} className=' hover:h-45 w-full h-40 w-full  object-contain mb-2' src={product.image} alt={product.title} /><h2 className='text-lg font-bold'>{product.title}</h2><p className='text-lg text-gray-800'>Price:{product.price}</p>
        <button className='click: bg-blue-400 bg-blue-500 p-2 text-white rounded'>Add To Wishlist</button></div></>
      ))}
    </div>
  )
}

export default Products


