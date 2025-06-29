import React from 'react'
import Recipecard from '../Components/Recipecard';

const Fav = () => {
     const favorites=JSON.parse(localStorage.getItem("fav"))||[];


  return (
         <div className='w-full h-full '>
            <h1 className='bg-[#fff1f2] rounded-2xl text-3xl font-medium text-[#2c2c2c] pt-3  text-center pb-4 mb-4'>Favorites Items</h1>
        <div className="w-full   flex gap-10 flex-wrap">
        {favorites.length>0?  favorites.map((items)=><Recipecard key={items.id} recipes={items}></Recipecard>):"Not Found"}

        </div>
    </div>
  )
}

export default Fav