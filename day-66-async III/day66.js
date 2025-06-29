// // make function order pizza after deliver return promise ans run resolve with pizz is deliverd

function orderPizza(){
    return new Promise((res,rej)=>{
            setTimeout(()=>{
                let chance=Math.random()<.9
                chance ? res():rej()
            },100)
    })
}
orderPizza().then(()=>{
    console.log("pizz is deliverd!!!");
    
}).catch(()=>{
    console.log("delivery failed");
    
})

//flate pomise chainning:-> .then().then().then()

// function getUser(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve({id:1,name:"rutan"})
//         }, 1000);
//     })
// }
// function getPost(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(["title:1","title:2"])
//         }, 1000);
//     })
// }
// function getComments(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(["great post","amazing"])
//         }, 1000);
//     })
// }
// getUser().then((data)=>{
//     console.log(data);
//     return getPost(data.id)
// }).then((data)=>{
//     console.log(data);
//     return getComments(data)
// }).then((cmt)=>{
// console.log(cmt);

// }).finally(()=>{
//     console.log("finally all are ready");
    
// })


// // /////fake api calll 

// // user ,post

// // function fakeapi(endpoint){
// //     let data={

// //         user:["rutan","raj","ravi"],
// //         post:["app","Ai","web dev"],
// //     }
// //   let delay=Math.floor(Math.random()*2000) +1000;
  
// //   return new Promise((res,rej)=>{
// //     setTimeout (()=>{
// //         res(data[endpoint])
// //         console.log(delay);
        
// //     },delay)
// //   })
// // }
// // fakeapi("post").then((data)=>{
// //     console.log(data);
// // })
// // fakeapi("user").then((data)=>{
// //     console.log(data);
// // })