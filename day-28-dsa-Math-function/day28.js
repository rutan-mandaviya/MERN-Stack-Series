// // math.ceil math.floor math.round function.

// // console.log(Math.ceil(2.1));//"3" upper limit touch max 
// // console.log(Math.floor(2.1));//"2" lower limit touch min max integer
// // console.log(Math.round(2.5)); //"3" do roundfigure number
// // console.log(Math.round(2.2)); //"2" do roundfigure number
// // console.log(Math.round(2.9)); //"3" do roundfigure number


// // math abs----> only nagative change to postive

// console.log(Math.abs(-5)); //"5" absolute value
// console.log(Math.abs(5)); //"5" absolute value

// // math trunk 

// console.log(Math.trunc(2.1)); //"2" remove decimal part
// console.log(Math.trunc(2.9)); //"2" remove decimal

// // math pow

// console.log(Math.pow(2,3)); //"8" 2 raise to power 3
// console.log(Math.pow(4,0.5)); //"2" square root of 4
// console.log(Math.pow(2,10)); //"1024" 2 raise to power 10

// // math sqrt

// console.log(Math.sqrt(16)); //"4" square root of 16
// console.log(Math.sqrt(25)); //"5" square root of 25

// // math cbrt

// console.log(Math.cbrt(27)); //"3" cube root of 27
// console.log(Math.cbrt(125)); //"5" cube root of 125

// // math max

// console.log(Math.max(1,2,3,4,5)); //"5" find max number
// console.log(Math.max(-1,-2,-3,-4,-5)); //"-1" find max number

// // math min

// console.log(Math.min(1,2,3,4,5)); //"1" find min number
// console.log(Math.min(-1,-2,-3,-4,-5)); //"-5" find min number

// // math random

// console.log(Math.random()); //"0.784984406020282" random number between 0 and 1
// console.log(Math.floor(Math.random()*10)); //"2" random number between 0 and 9

//  math tofixed

// let a=2.2343

// console.log(Number(a.toFixed(2))); //"2.23" round to 2 decimal places


// q.1 coumpound intrest

// let p=1000
// let r=5
// let t=1
// let n=12

// let ci=p*(1+(r/n))**(n*t)

// console.log(ci) // 1224.58


// q.2 otp genrator

// console.log(Math.floor(Math.random()*9000+1000));


// if-else start



// q.1 two number gratest or smallesrt

// let a=Number(prompt("enter first number"))
// let b=Number(prompt("enter second number"))

// if (a > b){
//     console.log(a + " is greater than " + b);
// }

// else{
//     console.log(b + " is greater than " + a);
// }
//
// q.2 even odd

// let num=Number(prompt("enter first number"))

// if (num % 2 == 0){
//     console.log(num + " is even");
// }

// else{
//     console.log(num + " is odd");
// }


// q.3 age is greater than 18

// let age=Number(prompt("enter your age"))

// if (age > 18){
//     console.log("You are eligible to vote");
// }

// else{
//     console.log("You are not eligible to vote");
// }

// q.4 print greter then among 3

let a=Number(prompt("Enter first number"))

let b=Number(prompt("Enter second number"))

let c=Number(prompt("Enter third number"))


if(a>b && a>c){
    console.log(a + " is greater than " + b + " and " + c);
}
else if(b>c ){
    console.log(b + " is greater than " + a + " and " + c);
}

else{
    console.log(c + " is greater than " + a + " and " + b);
}