// LOGGING
console.log("Hello World");
console.warn("this is last warning");
console.error("this is invalid message")

// USER INPUT LOGGING TYPES
alert("are u above 18?")
console.log("Heyyy "+prompt("what is your name?"));
confirm("are you sure?");


// Arithmetic operations
console.log(5 + 5);
console.log(5 - 5);
console.log(5 * 5);
console.log(5 / 5);
console.log(5 % 5);

// initialize & declarations
var name; // initialize
name = "John"; // declaration


// variables

// var
var name = "John"; //global varible it shows in window object changes
name="rutan"
console.log(name);

// let
if(true){
    let age = 30;//is not show in window object 
    age=99 //local variable  change same as var
    console.log(age);
    
}
// console.log(age);//this is throwing error

const isMale = true; //constant variable no change
// isMale =false;//is throowing error
