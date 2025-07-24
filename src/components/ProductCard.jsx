import React from "react"

const ProductCard = ({product}) => {
  
  

  return (
    <div className='border rounded-lg p-4 shadow-md hover:shadow-lg transition'>
      <img src={product.image} alt={product.title} className='h-40 w-full object-contain mb-2'/>
      <h2 className='text-lg font-bold'>{product.title}</h2>
      <p className='text-gray-800'>Rs.{product.price}</p>
      <button className='bg-blue-500 text-white px-4 py-2 rounded mt-2'>Add to whistlist</button>
      
    </div>
  )
}

export default ProductCard
