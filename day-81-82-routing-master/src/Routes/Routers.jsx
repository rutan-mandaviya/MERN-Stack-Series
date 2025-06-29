import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../Components/home'
import About from '../Components/about'
import Products from '../Components/Products'
import Service from '../Components/Service'

import ProductDetails from '../Components/ProductDetails'

const Routers = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About></About>}/>
        <Route path="/products" element={<Products></Products>}>
        <Route path="/products/productdetails/:name" element={<ProductDetails></ProductDetails>}/>
        </Route>
        
        <Route path="/services" element={<Service></Service>}></Route>
      </Routes>
    </div>
  )
}

export default Routers