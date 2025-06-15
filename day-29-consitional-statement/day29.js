// q.1 find the gretest of two

// let a=Number(prompt("enter 1st digit "))
// let b=Number(prompt("enter 2nd digit "))

// a>b ?console.log( a+" is greater then "+ b):console.log(b+" is greater then "+ a);

//q.2  Check if a Nurnber i Even or Odd

// let number=Number(prompt("if u check number is even or odd plz enter your number"));

// number%2==0?console.log(number+" Even Number"):console.log(number+" Odd number");
// ;

// q.3 Check if User is a
// valid Voter

// let name=prompt("Enter your real name: ")
// let age=Number(prompt("Enter your real age : "));
// age>=18 ? console.log(name+ " u r valid voter"): console.log(name +" u r kids plz.. grow your age🥲");


// // q.4 find the N greter Among Three Nunbers

// let a=Number(prompt("Enter first number: "))
// let b=Number(prompt("Enter second number: "))
// let c=Number(prompt("Enter third number: "))

// a>=b && a>=c ? console.log(a+ " is gretest number"): b>=c? console.log(b+" is grestest number among three"):console.log(c+ "is greatest number");

// q.5 Check if a Year is a Leap Year

// let Year=Number(prompt("Enter your fav year"));
// let isleap=false;
// if(Year % 4 == 0){
//     if(Year % 100 == 0 && Year % 400 ==0){
//         isleap=true
//     }
//     else{
//         isleap=true
//     }
// }
// else{
//     isleap=false
// }
// console.log(isleap == true ?Year + " is Leap year": Year+ " is not a leap year");


// q.6 Calculate Final Amount After Discount

// let Amount=Number(prompt("enter your buying amount"))
// let dis=0;
// Amount > 9000?dis=20:
// Amount > 7000 && Amount <= 9000?dis=10:
// Amount > 5000 && Amount < 7001 ? dis=5:
// Amount >=0    && Amount <=5000 ? dis=0:"";

// let final=Amount-((Amount*dis)/100)
// console.log(final + " it is your final payble amont");

// qq.7 Calculate Electricity Bill Based on Units

// let unit=Number(prompt("what your bijli bill unit ??"))
// let amount=0;
// unit >= 0 && unit<=100 ? amount= unit * 4.2 :
// unit >=101 && unit<=200 ? amount = 100*4.2+(unit-100)*6:
// unit >=201 && unit<=400 ?amount=(100*4.2)+(100 * 6)+(unit-200)*8:
// unit > 400 ? amount=(100*4.2)+(100 * 6)+(200*8) + (unit-400)*13:"";

// console.log("your bijli bill is " + amount);
