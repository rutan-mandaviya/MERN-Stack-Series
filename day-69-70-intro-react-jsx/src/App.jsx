import React, { Fragment } from 'react'

const App = () => {
  // const handleclick=(msg)=>{
  //   alert(msg)
  // }
  
  let count=1
  const wraaper=()=>++count;
    
  
  
  
  //js logic write anything..........
  return (
    /// return only html css not include js
    <>
    <div  className=''>App</div>
    <button onClick={()=>++count}>count {count}</button>
    </>
  )
  
}

export default App