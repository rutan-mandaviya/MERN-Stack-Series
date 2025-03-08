//1. Create a function that takes another function as an argument and calls it after 3 seconds (HOF + Callback).

// function caller(fn){
//     setTimeout(fn,3000)

// }

// caller(function(){
//   console.log("hey");
// })

//2. Implement your own version of `.map()` as a higher-order function.

// var arr=[1,2,3,4,5,6,7,8,9]
// function myMap(arr, callback){
//   var newArr=[]
//   for(var i=0;i<arr.length;i++){
//     newArr.push(callback(arr[i]))
//   }
//   return newArr;
// }


// var ans=myMap(arr,function(val){
//   return val*8;
// })
// console.log(ans);

//3. Write a function that uses closures to create a counter.

// function counter(fn){
//   let count=0;
//   return function(){
//     count++;
//     console.log(count);
//   }
// }
// var ans=counter();
// ans();
// ans();
// ans();

//4. Implement a function that limits how many times another function can be called (Closure + HOF).

function fnlimiter(fn,limit){
  let totalcalles=0;
  return function(){
    totalcalles++;
    if(totalcalles<=limit){
      fn();
    }else{
      console.log("Limit reached");
    } 

  }

}
let limiter= fnlimiter(function(){
  console.log("hey");
  
},3)