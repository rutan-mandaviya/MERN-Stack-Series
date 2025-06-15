//1. Create a function that takes a callback and executes it after every `n` seconds indefinitely.


// function abcd(callback,time){
    
//     setInterval(callback, time*1000)
// }

// abcd(function(){
//    console.log("heyyy");
   
// },3)

// Implement a function that returns a function with a preset greeting (Closure).

// function greeting(greet){

//     return function(name){
//         console.log(greet+` ${name}`);
//     }
// }


// var ans=greeting("hello")
// ans("rutan")
// ans("rut")

// mplement a function that takes a callback and only executes it once (HOF + Closure).


// function abcd(fn){
//     let executed=false
//     return function(){
//         if (!executed){
//             executed=true
//             fn()
//         }
//     }
// }

// var newf=abcd(function(){
//     console.log("heyyy");
    
// },3)
// newf()
// newf()

// 4. Implement a function that throttles another function (HOF + Closures).
// function throttle(fn, delay) {
//     let lastCall = 0;
//     return function () {
//         let now = Date.now();
//         console.log(now-lastCall);
//         if (now - lastCall >= delay) {
//             lastCall = now;
//             fn();
//         }
//     };

   
// }
// // Example usage
const throttledFn = throttle(() => console.log("Throttled Execution"), 5000);
throttledFn();
