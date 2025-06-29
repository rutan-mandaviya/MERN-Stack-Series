import React, { createContext, useContext, useEffect, useState } from 'react'
import { set } from 'react-hook-form'

export const recipecontext=createContext(null)
const Recipecontext = (props) => {
        const [data, setdata] = useState([])

        useEffect(()=>{
          setdata(JSON.parse(localStorage.getItem("recipes")) || [])
        },[])
  
//   {
//     "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
//     "Categories": "Indian",
//     "ingrdents": "Paneer, Onion, Capsicum, Spices, Tomato Puree",
//     "instruction": "Saute onion, capsicum, add spices and tomato puree, add paneer and cook for 10 minutes.",
//     "titile": "Paneer Tikka Masala"
//   }

 

  return (
 
    <recipecontext.Provider value={{data,setdata}}>
       {props.children}

        </recipecontext.Provider>
 
  )
}

export default Recipecontext