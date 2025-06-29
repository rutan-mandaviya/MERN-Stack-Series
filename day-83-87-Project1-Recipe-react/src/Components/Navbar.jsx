import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const navhandle=(data)=>{return data.isActive?"bg-white px-8 py-2 text-red-500 font-semibold rounded-full":""
      
    }
  return (
    <div className='w-[90%] h-14 font-semibold  mx-auto mt-5 flex justify-between px-14 gap-10 items-center rounded-full  bg-[#f8f8fa] '>
        <h1 className='text-2xl text-red-500 font-bold'>Recipe</h1>
        <NavLink className={(data)=>navhandle(data)} to="">Home</NavLink>
        <NavLink className={(data)=>navhandle(data)} to="/recipe">Recipe</NavLink>
        <NavLink className={(data)=>navhandle(data)} to="/favorites">Favorites <span className='text-2xl'>💓</span></NavLink>
        <NavLink className={({isActive})=> `bg-white font-semibold px-5 py-2 rounded-md ${
        isActive ? 'text-rose-800 font-semibold' : ''
    }`} to="/create">Create Recipe</NavLink>
    </div>
  )
}

export default Navbar