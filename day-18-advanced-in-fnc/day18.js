// 1. iife -->imidiately invoked fns expression

// (function add (a,b){
//     console.log(a+b);
    
// })(1,2);

// var ans=(function abcd (){
//     var a=12
//     return {
//         set:function (val){
//             a=val
//         },
//         get:function (){
//             console.log(a);
            
//         },
//     }
    
// })();
// ans.set(32);
// ans.get()

// 2. hofs --> higher order function it takes function as a parameter or return function

// function abcd (a,b){
//     a();
//     return function(){
//         console.log("heyy"+b);
//        }
// }

// var ans=abcd(function(){
//     console.log("hello");  
// },23)()

// 3. callback function
// function abcd (a){
//       a()
// }
// abcd(function (){
//     console.log("hello");  
// })

// 4. first class function

// function abcd (){
//     console.log("hello");
// }
// var a=abcd;
// a()

// 5. pure function
// function add(a,b){
//     return a+b
// }
// console.log(add(1,2));

// 6. impure function

// var total=2;
// function add(a,b){
//     total=total+a+b;
// }
// add(2,3);
// console.log(total);

// 7. global scope 

// var a=10;
// function abcd (){
//     console.log(a);
// }
// abcd()

// 8. local scope


// function abcd (){
//     var a=10;
//     console.log(a);
// }

// abcd()
