import { nanoid } from "nanoid";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../Context/Recipecontext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

 const {data,setdata}= useContext(recipecontext)
 const navigate=useNavigate()

const submithandler=(recipe)=>{
    recipe.id=nanoid();
    let copydata=[...data]
    copydata.push(recipe)
   setdata(copydata) 
   localStorage.setItem("recipes",JSON.stringify(copydata))
   toast.success("New Recipe Created")
   reset();
   navigate("/recipe")
    
}

  return (
    <div className="w-fit mx-auto h-fit flex flex-col items-center bg-zinc-200 p-6 rounded-3xl shadow-md">
      <h1 className="text-3xl font-bold text-green-700 mb-6">
        🍽 Create a New Recipe
      </h1>
      <form className="flex flex-col gap-4 w-72 sm:w-96" onSubmit={handleSubmit(submithandler)}>
        <div className="flex flex-col">
          <input
            {...register("image")}
            className="border-b border-zinc-400 bg-transparent p-2 focus:border-green-500 outline-none"
            type="url"
            placeholder="Image URL"
          />
          {errors.image && (
            <p className="text-red-500 text-sm">{errors.image.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <input
            {...register("title")}
            className="border-b border-zinc-400 bg-transparent p-2 focus:border-green-500 outline-none"
            type="text"
            placeholder="Recipe Title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <textarea
            {...register("ingrdents")}
            className="border-b border-zinc-400 bg-transparent p-2 focus:border-green-500 outline-none"
            placeholder="Ingredients"
          ></textarea>
          {errors.ingrdents && (
            <p className="text-red-500 text-sm">{errors.ingrdents.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <textarea
            {...register("instruction")}
            className="border-b border-zinc-400 bg-transparent p-2 focus:border-green-500 outline-none"
            placeholder="Instructions"
          ></textarea>
          {errors.instruction && (
            <p className="text-red-500 text-sm">{errors.instruction.message}</p>
          )}
        </div>
        <div className="flex flex-col">
          <select
            {...register("Categories")}
            className="border-b border-zinc-400 bg-transparent p-2 focus:border-green-500 outline-none"
          >
            <option value="Italian">Italian</option>
            <option value="Maxican">Maxican</option>
            <option value="chainezze">chainezze</option>
          </select>
          {errors.instruction && (
            <p className="text-red-500 text-sm">{errors.instruction.message}</p>
          )}
        </div>

        <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md font-semibold mt-4 shadow-md transition">
          Save Recipe
        </button>
      </form>
    </div>
  );
};

export default Create;
