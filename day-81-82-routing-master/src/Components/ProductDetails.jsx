import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ProductDetails = () => {
const navigate=useNavigate()
const paramas=useParams()
console.log(paramas);

  return (
    <div className='w-full h-screen p-10 flex text-2xl flex-col gap-10'>

        <div className="py-2 flex flex-col gap-3">
            <h1 className='text-4xl'>{paramas.name}</h1>
            <h1 className=''>Product Details</h1>
            <p className=''>Product Info.............o</p>
            <button onClick={()=>navigate(-1)} className='bg-green-500  text-white rounded-md px-4 py-2 text-shadow-emerald-400'>Go back</button>
        </div>
  </div>
  )
}

export default ProductDetails