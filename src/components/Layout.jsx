import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Navbar/>
      <main className='min-h-[80vh] px-4 py-2'>
      <Outlet/>
      </main>
    </>
  )
}

export default Layout
