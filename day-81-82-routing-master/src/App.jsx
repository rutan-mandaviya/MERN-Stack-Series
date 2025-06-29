import React from "react";
import Products from "./Components/Products";
import Home from "./Components/home";
import About from "./Components/about";
import Service from "./Components/Service";
import ProductDetails from "./Components/ProductDetails";
// import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Routers from "./Routes/Routers";

const App = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routers></Routers>
 {/* <ProductDetails/> */}
    </div>
  );
};

export default App;
