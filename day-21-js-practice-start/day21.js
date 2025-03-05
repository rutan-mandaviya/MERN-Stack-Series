// 1. Log "Hello, JavaScript!" to the console in 3 different ways.

console.log("Hello, JavaScript!");

console.warn(`Hello, JavaScript!`);
console.error(`Hello, JavaScript!`);
console.info(`Hello, JavaScript!`);
console.table({ message: "Hello, JavaScript!", error: false });

// 2. Perform 35 * 2 - (10 / 2) + 7 and log the result.
console.log(eval("35 * 2 - (10 / 2) + 7"));

// 3. Log the data type of "123", 123, true, and null using typeof.

console.log(typeof "123");
console.log(typeof 123);
console.log(typeof true);
console.log(typeof {});
console.log(typeof null);

// 4. Write a program that swaps the values of two variables.

let a = 10;
let b = 20;

console.group("Before Swap");
console.log("a:", a);
console.log("b:", b);
console.groupEnd();

[a, b] = [b, a];

console.group("After Swap");
console.log("a:", a);
console.log("b:", b);
console.groupEnd();


// 5. Use console.group() to organize logs into a group.

console.group("Group 1");
console.log("This is group 1");
console.log("This is another log in group 1");
console.groupEnd();

console.group("Group 2");
console.log("This is group 2");

console.group("Subgroup 2.1");
console.log("This is subgroup 2.1");
console.groupEnd();

// 6. Declare a const object, modify its properties, and log the updated object.

const obj = { name: "John", age: 30 };//value is not set u=you can update value

console.log("Original Object:", obj);
Object.freeze(obj);//if we use freeze then made object is constant

obj.name = "Jane";
obj.age = 25;

console.log("Updated Object:", obj);




// 7. Convert "50" (string) into a number using 3 different methods.

let num1 = parseInt("50");
let num2 = Number("50");
let num3 = +"50";

console.log(num1+num2+num3);


// 8. Check if "JavaScript" contains "Script" without using .includes().

let str = "JavaScript";
let search = "Script";

console.log(str.indexOf("cript")===-1 ? false : true);
console.log(str.search("cript")===-1 ? false : true);



// 9. Create an array of 5 numbers and log the sum using .reduce().

let arr = [1, 2, 3, 4, 5];

arr.reduce(arr, function (acc, curr) {
    return acc + curr;
}, 0);


// 10. Explain the difference between undefined, null, and NaN with examples.

// let a;
// console.log(a); // undefined

// let b = null;

// console.log(b); // null

let c = NaN;

// console.log(c); // NaN

// undefined: When a variable is declared but not initialized, it has the value undefined.
// null: It is an assignment value that indicates a variable has no value.
// NaN: It is a property of the global object and indicates that a value is not a number.
