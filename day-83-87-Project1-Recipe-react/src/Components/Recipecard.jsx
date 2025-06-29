import React from "react";
import { Link } from "react-router-dom";

const Recipecard = ({ recipes }) => {
  const { id,image, Categories, ingrdents, instruction, title } = recipes;
//   console.log(titile);
  
  return (
    
      <Link className="block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 ease-in-out" to={`/recipe/details/${id}`}>
      <div className="card w-72 h-full   bg-zinc-50 ">
        <div className="w-full h-44 overflow-hidden relative ">
          <h2 className="text-white text-xs bg-green-500 top-[5%] rounded-tr-3xl px-3 py-1 absolute"> #Best Recipes</h2>
          <img
            className="w-full h-full object-cover object-[50%_0%]"
            src={image}
            alt="j"
          />
        </div>
        <div className="px-4 py-5">
            <h1 className="text-lg font-semibold pb-1">{title}</h1>
            <button className="bg-[#cae6ef] font-medium rounded-full px-2  py-2">Cate: {Categories}</button>
            <button className="bg-[#cae6ef] font-medium rounded-full px-4 py-2 ml-2">ingrdents: {ingrdents.split(",").length}</button>
            <p className="leading-none px-2 py-2"><span className="font-bold ">Instruction:</span> {instruction}</p>
            <p className="leading-none px-2 py-2"><span className="font-bold ">Ingrdents:</span> {ingrdents}........<span className="text-blue-400">more</span></p>
            
        </div>
     
        
      </div></Link>
    
  );
};

export default Recipecard;
