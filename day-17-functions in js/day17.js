// // question 1= sorting arry reverse direction and remove duplicate value 
// // var arr=[1,2,3,1,2,4,5,3,6,3,2,7,4]
// // console.log([...new Set(arr)]);

// // var ans=arr.sort((a,b)=>(a))
// // console.log(ans);

// // console.log([...new Set(arr)].sort(function(a,b){
//     //     return b-a;
//     // })[6]);
    
    
//  // question2: find how much type particular value are repetaed in array
// var arr=[1,3,3,1,2,4,5,3,6,3,2,7,4]
// var obj={
    
// }
// arr.forEach((val)=>(obj[val] == undefined ? obj[val]=1 : obj[val]++))


// 1. Functions

//function statement function name is required
function abcd (a,b){
    console.log(a+b+" Hello World ");
    
}
abcd(22,4)
// function expression function name is not required
var b=function (a,b){
    console.log(a+b+" Hello World ");
    
}
b(22,4)

// 2. Anonymous function
// function without name
// (function (a,b){
//     console.log(a+b+" Hello World ");
    
// })

// 3. fat Arrow function
var a=(a)=>{
    console.log("Hello World "+a);
}
a(12)
////////fat arrow with inplicit return 

function abcd(a) {
    return a
}
var ansa=abcd(12)
console.log(ansa);

// rest parameter
function add(a,...args){
    console.log(a,args);
    
}

add(1,2,3,4,5)


