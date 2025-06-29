import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../Context/Recipecontext";
import { set, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const { data, setdata } = useContext(recipecontext);
  const params = useParams();
  const navigate = useNavigate();
  const recipefind = data.find((items) => params.id == items.id);
console.log(recipefind);

  // console.log(recipefind);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
defaultValues: {
      image: recipefind?.image,
      title: recipefind?.title,
      ingrdents: recipefind?.ingrdents,
      instruction: recipefind?.instruction,
      Categories: recipefind?.Categories,
    }
    
  });

  useEffect(() => {
  if (recipefind) {
    reset({
      image: recipefind.image,
      title: recipefind.title,
      ingrdents: recipefind.ingrdents,
      instruction: recipefind.instruction,
      Categories: recipefind.Categories,
    });
  }
}, [recipefind, reset]);


  const Updatehandler = (recipe) => {
    const index = data.findIndex((items) => params.id == items.id);
    console.log(index);
    const copydata = [...data];

    copydata[index] = { ...copydata[index], ...recipe };

    setdata(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));
    toast.success("Recipe Updated");
    navigate("/recipe");
  };
  const [favorite, setfavorite] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  );
  const favhandler = () => {
    let copydata = [...favorite];
    copydata.push(recipefind);
    localStorage.setItem("fav", JSON.stringify(copydata));
    setfavorite(copydata);
  };
  const unfavhandler = () => {
    const filterfav = favorite.filter((items) => items.id != recipefind?.id);
    localStorage.setItem("fav", JSON.stringify(filterfav));
    setfavorite(filterfav);
  };

  const deletehandler = () => {
    const filterdata = data.filter((items) => params.id != items.id);
    setdata(filterdata);
    localStorage.setItem("recipes", JSON.stringify(filterdata));

    const updatedFav = favorite.filter((items) => items.id != params.id);
    setfavorite(updatedFav);
    
    localStorage.setItem("fav", JSON.stringify(updatedFav));
    toast.error("🗑️ Recipe deleted");
    navigate("/recipe");
  };

  return recipefind ? (
    <div className="w-full h-full flex justify-center gap-30">
      {/* Card____________------------- */}
      <div className="card w-[35vw]  rounded-3xl overflow-hidden bg-zinc-50 ">
        <div className="px-4 py-7 relative">
          <h1 className="text-lg font-semibold pb-1">{recipefind.title}</h1>

          {favorite.find((items) => items.id == recipefind?.id) ? (
            <i
              onClick={unfavhandler}
              className="text-4xl text-rose-500 absolute right-[10%] top-[0%] py-5 ri-heart-fill"
            ></i>
          ) : (
            <i
              onClick={favhandler}
              className="text-4xl text-rose-500 absolute right-[10%] top-[0%] py-5 ri-heart-line"
            ></i>
          )}

          <div className="w-full h-[25em] overflow-hidden  ">
            <img
              className="w-full h-full object-cover rounded-4xl py-2 object-[50%_0%]"
              src={recipefind.image}
              alt="j"
            />
          </div>
          <button className="bg-[#cae6ef] font-medium rounded-full px-4 py-2">
            Cate: {recipefind.Categories}
          </button>
          <button className="bg-[#cae6ef] font-medium rounded-full px-4 py-2 ml-2">
            ingrdents: {recipefind.ingrdents.split(",").length}
          </button>
          <p className="leading-none px-2 py-2">
            <span className="font-bold ">Instruction:</span>{" "}
            {recipefind.instruction}
          </p>
          <p className="leading-none px-2 py-2">
            <span className="font-bold ">Ingrdents:</span>{" "}
            {recipefind.ingrdents}
          </p>
        </div>
      </div>
      {/* {card -end-----------------------------------} */}
      {/* Upsdate         ------------------------- */}
      <form
        className="flex flex-col gap-4 w-72 sm:w-96"
        onSubmit={handleSubmit(Updatehandler)}
      >
        <h1 className="text-center py-4 text-4xl font-medium pb-15"><span className="text-green-500">Update</span> & <span className="text-red-500"> Delete</span> Form <span className="text-[#dadada]">Details</span> </h1>
        
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

        <div className="flex gap-4 mt-4">
          <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md font-semibold transition-all">
            Update Recipe
          </button>
          <button
            onClick={deletehandler}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md font-semibold transition-all"
          >
            Delete Recipe
          </button>
        </div>
      </form>
      {/* update end */}
    </div>
  ) : (
    "Not Found"
  );
};

export default SingleRecipe;
