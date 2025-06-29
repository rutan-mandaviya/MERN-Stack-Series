import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const Navhandler=(data)=>data.isActive ? "bg-pink-400 text-white font-semibold px-4 py-1 rounded-md":""
  return (
    <div className='w-full h-20 flex justify-center items-center gap-14 rounded-md bg-zinc-300'>
       
    <NavLink className={Navhandler} to="/">Home</NavLink>
    <NavLink className={Navhandler} to="/about">About</NavLink>
    <NavLink className={Navhandler} to="/products">Products</NavLink>
    <NavLink className={Navhandler} to="/services">Service</NavLink>

    </div>
  )
}

export default Navbar