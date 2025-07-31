import { BrowserRouter, Routes, Route, link } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Wishlist from './components/Wishlist'
import Cart from './components/Cart'
import Layout from './components/Layout'
import Navbar from './components/Navbar'


function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />
    },
    {
      path: "#",
      element: <Navbar />
    },
    {
      path: "/Wishlist",
      element: <Wishlist/>
    },
    {
      path: "/Cart",
      element: <Cart/>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}


export default App
