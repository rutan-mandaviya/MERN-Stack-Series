import React from 'react'
import { useState } from 'react'

function App() {

  let [count,setcount]=useState(0)
   
  const counter=()=>{
    setcount(count+1)
  }
  return (
    <div>
    <button onClick={counter}>Increase Count :{count}</button>

    </div>
  )
}

export default App

// import React from 'react'

// function App() {


//    const obj=[
//     {name:"rutan",IDNo:23},
//     {name:"RAJ",IDNo:3},
//     {name:"ravi",IDNo:234},
//   ]

//  let profile= obj.map((items,ind)=>{
    
//    return( <li key={ind}>
//       <span>{ind } name: {items.name}</span>
//       <span> Idno:  {items.IDNo}</span>
//     </li>
//    )
//   })


//   return (
//     <div>


//       {profile}
//     </div>
//   )
// }

// export default App








// // import React from 'react'
// // function App() {

 
// //   let a=true; //not print beacuse its reserve kryword
// //   let nu=null; //not print
// //   let un=undefined;
// //   let b="name";
// //   return (
// //     <>
// //     <div className="">un:{un}</div> 
// //     <div className="">nu:{nu}</div>
// //     <div className="">a:{a}</div>
// //     <div className="">b:{b}</div>
// //     </>
// //   )
// // }

// export default App