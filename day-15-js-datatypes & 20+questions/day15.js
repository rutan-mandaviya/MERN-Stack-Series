// DATATYPES

// Primitive Datatypes
// 1. Number

console.log(123);// if  number then it color blue in console
console.log(12.3);// float
console.log(true);// boolean
console.log('name');// string
// var a=Number(prompt("Number1"))//convert to number
// var b=Number(prompt("Number2"));//it takes input only string format
// console.log(a+b);//concatination

// 2. Null or undefined
null;//nothing behave like empty
undefined;// declared but not intialized

// 3. hoisting

console.log(val);
var val=10;//only var val; is moves top stack of in our js file show throw undefined

// 4. ternary operator
var age=Number(prompt("Enter your age"))

var message=(age<18)? "Minor" : "Adult";
while(true){
    console.log(message);
    break;
}
