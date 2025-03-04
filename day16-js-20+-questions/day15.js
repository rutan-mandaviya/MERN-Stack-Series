// q.....1  check age to tye convirsion

// age=prompt("Enter your age")

// if(age<18){
//     console.log("You are Minor");

// }
// else if(age>=18 && age<60){
//     console.log("You are Adult");
// }

// else{
//     console.log("You are Senior");
// }

// q-2.......... sum even/odd
// a=Number(prompt("write first number"))

// b=Number(prompt("Enter second number"))
// if ((a+b) % 2 == 0){
//     console.log("The sum is even")
// }

// else{
//     console.log("The sum is odd")
// }

// q-3..........check char is upper case lower case or not a letter

// char=prompt("Enter a character")

// if (char>="A" && char<="Z"){
//     console.log("The character is Upper Case")
// }
// else if (char>="a" && char<="z"){
//     console.log("The character is Lower Case")
// }
// else{
//     console.log("The character is not a letter")
// }

// q-4.......... largest of three numbers


// a=prompt("enter first number")

// b=prompt("Enter second number")

// c=prompt("Enter third number")

// if(a>b && a>c){
//     console.log("The largest number is "+a)
// }

// else if(b>c){
//     console.log("The largest number is "+b)
// }

// else{
//     console.log("The largest number is "+c)
// }

// q-5.......... leap year check

// let year = Number(prompt("Enter a year"));

// if (year % 4 == 0) {
//     if (year % 100 == 0 ) {
//         if (year % 400 == 0) {
//             console.log(year + " is a leap year");
//         } else {
//             console.log(year + " is not a leap year");
//         }
//     } else {
//         console.log(year + " is a leap year");
//     }
// } else {
//     console.log(year + " is not a leap year");  // ✅ Missing else added
// }

// q-6.......... simpple calculator

// let num1 = parseFloat(prompt("Enter first number"));

// let num2 = parseFloat(prompt("Enter second number"));

// let operator = prompt("Enter an operator (+, -, *, /): ");

// switch (operator) {
//     case "+":
//         console.log(num1 + num2);
//         break;
//     case "-":
//         console.log(num1 - num2);
//         break;
//     case "*":
//         console.log(num1 * num2);
//         break;
//     case "/":
//         if (num2 != 0) {
//             console.log(num1 / num2);
//         } else {
//             console.log("Error! Division by zero is not allowed.");
//         }
//         break;
//     default:
//         console.log("Error! Invalid operator.");
// }

// q-7..........user grreating by name and time by AM or PM
// Ask for the user's name
// let name = prompt("Enter your name:");

// // Ask the user for the time in 24-hour format
// let hour = parseInt(prompt("Enter the current hour (0-23):"));

// // Validate the input
// if (isNaN(hour) || hour < 0 || hour > 23) {
//     alert("Invalid time entered! Please enter a number between 0 and 23.");
// } else {
//     // Determine the greeting based on the time
//     let greeting;
//     if (hour >= 5 && hour < 12) {
//         greeting = "Good Morning";
//     } else if (hour >= 12 && hour < 17) {
//         greeting = "Good Afternoon";
//     } else if (hour >= 17 && hour < 21) {
//         greeting = "Good Evening";
//     } else {
//         greeting = "Good Night";
//     }

//     // Display the greeting
//     alert(`${greeting}, ${name}!`);
//     console.log(`${greeting}, ${name}!`);
// }

// q-8.......... * Traffic Light System – Ask the user for a traffic light color (red,
// yellow, green). Print appropriate messages

// let color=prompt("what is the colr of traffic light choose-> (red,yellow,green)")

// if(color!="red" && color!="yellow" && color!="green"){
//     alert("Invalid color! choose either red, yellow or green");
// }

// if (color=="red"){
//     alert("stop  ahead traffic!"); 
// }

// else if (color=="yellow"){
//     alert("Get ready!"); 
// }
// else{
//     alert("Go!");
// }

// q-9.......... Multiplication Table – Ask the user for a number and print its
// multiplication table up to 10.

// let number=Number(prompt("Enter a number"))

// for (let i=1;i<11;i++){
//     console.log(number+" * "+i+" * "+number*i);
    
// }

// **( 11. Grade Calculator – Ask the user for their marks (0-100).
// Assign grades based on the range: 90-100: A
//  80-89: B
//  70-79: C
//  60-69: D
//  Below 60: F

// let marks=Number(prompt("What is your marks b/w (0-100)"))
// if(marks<0 || marks>=101){
//     alert("invalid marks")

// }

// else if( marks>=90){
//     alert("Grade A")
// }
// else if(marks>=80){
//     alert("Grade B")
// }
// else if(marks>=70){

//     alert("Grade C")

// }
// else if(marks>=60){

//     alert("Grade D")
// }
// else{
//     alert("Grade FAIL")
// }

// 12.( Simple Login System – Set a predefined username and
//     password. Ask the user to enter their credentials using
//     prompt(). If correct, print “Login Successful”; otherwise, print
//     “Incorrect username or password.”

// let username="admin";

// let password="123";

// let enteredUsername=prompt("Enter your username")

// let enteredPassword=prompt("Enter your password")
// if( enteredUsername !=username || enteredPassword!=password){
//     alert("Incorrect username or password")
// }

//13.   -------------? Swapping Without Third Variable – Take two numbers from the
// user and swap their values without using a third variable

// let num1=Number(prompt("Enter first number"))

// let num2=Number(prompt("Enter second number"))
// num1=num1+num2
// num2=num1-num2

// num1=num1-num2
// console.log("After swapping "+num1+" and "+num2)


// 14.=======? FizzBuzz (Multiple of Both) – Ask the user for a number. If it's a
// multiple of both 3 and 5, print “FizzBuzz”; if only 3, print “Fizz”; if
// only 5, print “Buzz”; otherwise, print the number itself

// let num1=Number(prompt("enter number"));
// if (num1 % 3 == 0 && num1 % 5 == 0){
//     alert("FIzzBuzz");
// }
// else if (num1 %3==0){
//     alert("Fizz");
// }

// else if (num1 % 5==0){
//     alert("Buzz");
// }
// else{
//     alert(num1);
// }

// 15.Number Reversal – Take a three-digit number from the user
// and print its reverse. (Example: 123 → 321).

// let num=Number(prompt("Enter a three digit number"));


// var firstdigit=parseInt(num/100)
// console.log(firstdigit);

// var step1=num%100
// var middledigit=parseInt(step1/10)
// var lastdigit=parseInt(num%10)

// console.log("Reverse number is "+lastdigit+middledigit+firstdigit)

// 16. Sum of Digits – Take a number from the user and print the sum
// of its digits. (Example: 123 → 1+2+3 = 6).
