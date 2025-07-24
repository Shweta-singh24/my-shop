
import {BrowserRouter, Routes, Route, link} from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Whistlist from './components/Whistlist'
import Products from './components/Products'
import Layout from './components/Layout'
import Navbar from './components/Navbar'

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>
    },
    {
      path: "#",
      element: <Navbar/>
    },
    {
      path: "/whistlist",
      element:<Whistlist/>
    },
    {
      path:"/products",
      element:<Products/>
    }
  ])
function App() {
  return (
    <>
    <RouterProvider router={router}/>
        
    </>
  )
}

export default App
