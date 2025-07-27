import React from 'react'
import { Link } from 'react-router-dom'
import Products from './Products'



const Whistlist = ({whistlist}) => {
  console.log(whistlist)
  
  
  return (
  <>
  {whistlist.length === 0 ? (
    <p> noooooooooooo</p>
  ):(
    whistlist.map(() => (
      <div key={Products.id}>{Products.title}</div>
    ))
  )}
  </>
  )
  }
export default Whistlist;
