import React from 'react'
import MainRoutes from './Routing/MainRoutes'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div className="">

      <Navbar></Navbar>
    <div className='w-[90%]  min-h-[100vh] p-10 bg-[#f0eff2] mx-auto rounded-4xl mt-5'>
      <MainRoutes></MainRoutes>
    </div>
    </div>
  )
}

export default App