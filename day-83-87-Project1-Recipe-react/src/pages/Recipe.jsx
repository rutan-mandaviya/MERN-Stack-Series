import React, { useContext } from 'react'
import { recipecontext } from '../Context/Recipecontext'
import Recipecard from '../Components/Recipecard';

const Recipe = () => {

    const {data,setdata}=useContext(recipecontext);


  return (
         <div className='w-full h-full '>
              <h1 className='text-3xl font-medium text-zinc-600 text-center pb-4 mb-4'>Recipes Items</h1>
        <div className="w-full   flex gap-10 flex-wrap">
        {data.length>0?  data.map((items)=><Recipecard key={items.id} recipes={items}></Recipecard>):"Not Found"}

        </div>
    </div>
  )
}

export default Recipe