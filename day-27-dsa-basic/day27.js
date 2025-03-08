// use always let that is good practices

// string vs integer

// string + string=string concatination rule follow
// string + integer + string =integer concatination

// let str = "10";
// let num = 10;
// let b=20
// console.log(num+b+ " sum is");
// console.log("sum is "+num+b);

// how  type check
// console.log(typeof (num+b));

// console.log(typeof str); // string
// console.log(typeof num); // number

// diff between concatination and  others

// console.log("10"+10); // "1010" rule follow concatination
// console.log("10"-10); // "0" 10 string convert number and substrct and convert type integer
// console.log("10"*10); // "100" multiple string convert number and substrct and convert type integer
// console.log("10"/10); // "1" string convert number and substrct
// console.log("10"%10); // "0" module

// swap number 3 trick


// 1st trick

// let temp=num1
// num1=num2
// num2=temp
// console.log([num1,num2]) 


// 2nd trick

// num1=num1+num2;
// num2=num1-num2;
// num1=num1-num2;
// console.log(num1,num2);

// 3rd trick


// let num1=10;
// let num2=20;
// [num1,num2]=[num2,num1];
// console.log(num1,num2);

// module
//sort remebr like if divedent grater then divisor so module is always divisor
console.log(4%10);
console.log(10%4);//right side always divident

console.log(10==="10");//false
console.log(10=="10");//true
console.log(10===10);//true

console.log(10!=="10"); // true
console.log(10!==10); // false

// in js increment decrement

let a=10;
console.log(a++); // 10
console.log(a); // 11

let b=10;

console.log(++b); // 11

console.log(a--); // 11

console.log(--b); // 10

console.log(a); // 10

let c=true;
let d=false

console.log(++d); // false
console.log(++c); // false
