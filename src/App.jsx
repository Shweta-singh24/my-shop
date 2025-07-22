
import {BrowserRouter, Routes, Route, link} from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Whistlist from './components/Whistlist'
import Products from './components/Products'
import Home from './components/Home'
import Layout from './components/Layout'

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>
    },
    {
      path: "/home",
      element: <Home/>
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
