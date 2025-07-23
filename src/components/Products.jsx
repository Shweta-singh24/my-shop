import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ProductCard from './productcard'

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4'>
      {products.map(product =>(
        <ProductCard key={product.id}product={product}/>
    ))}
    </div>
  )
}

export default Products


