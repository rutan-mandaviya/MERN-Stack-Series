import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'

import Recipe from '../pages/Recipe'
import Create from '../pages/Create'
import SingleRecipe from '../pages/SingleRecipe'
import PagenotFound from '../pages/PagenotFound'
import Fav from '../pages/Fav'

const MainRoutes = () => {
  return (
    <div>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/favorites" element={<Fav></Fav>}></Route>
                <Route path="/recipe" element={<Recipe></Recipe>}></Route>
                <Route path="/recipe/details/:id" element={<SingleRecipe></SingleRecipe>}></Route>

                <Route path="/create" element={<Create></Create>}></Route>
                <Route path='*' element={<PagenotFound></PagenotFound>}></Route>
            </Routes>

    </div>
  )
}

export default MainRoutes