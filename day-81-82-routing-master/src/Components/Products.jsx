import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  const handlenavigate = (name) => navigate(`/products/productdetails/${name}`);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[50%] h-screen p-10 flex text-2xl flex-col gap-10">
        <div className="py-2">
          <h1 className="">Product 1</h1>
          <button
            onClick={()=>handlenavigate("Product 1")}
            className="bg-green-500 text-white rounded-md px-4 py-2 text-shadow-emerald-400"
          >
            See Details
          </button>
        </div>

        <div className="py-2">
          <h1>Product 2</h1>
          <button
            onClick={()=>handlenavigate("product 2")}
            className="bg-green-500 text-white rounded-md px-4 py-2 text-shadow-emerald-400"
          >
            See Details
          </button>
        </div>
        <div className="py-2">
          <h1>Product 3</h1>
          <button
            onClick={()=>handlenavigate("product 3")}
            className="bg-green-500 text-white rounded-md px-4 py-2 text-shadow-emerald-400"
          >
            See Details
          </button>
        </div>
        <div className="py-2">
          <h1>Product 4</h1>
          <button
          onClick={()=>handlenavigate("product 4")}
            className="bg-green-500 text-white rounded-md px-4 py-2 text-shadow-emerald-400"
          >
            See Details
          </button>
        </div>
      </div>
      <div className="">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Products;
