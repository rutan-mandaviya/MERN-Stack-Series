// q.1 print natrual number 1 to n

// let num=Number(prompt("assume a number i will print all the number of your destination :"))

// for (let i=1 ; i<=num;i++){
//     console.log(i);
    
// }

// qq.2 reverse 

// let num=Number(prompt("assume a number i will print all the number of your destination :"))
// for (let i=num; i>=1 ;i--){
//     console.log(i);
    
// }

// qq.3 sum of n Number 

// let n=Number(prompt("enter number"))
// let sum=0
// for ( let i = 1 ; i<=n;i++){
//     sum+=i
// }
// console.log(sum);


// qq.4 factorial


// let n=Number(prompt("enter number"))
// let fact=1
// for ( let i = 1 ; i<=n;i++){
//     fact*=i
// }
// console.log(fact);

// qq.5 sum of even or odd number 

// let st=Number(prompt("enter staring num"))
// let end=Number(prompt("enter ending num"))
// let evensum=0,oddsum=0;
// for ( let i = st ; i<=end;i++){
//     i % 2== 0? console.log("even number is +"+(evensum+=i)):
//      console.log("odd num is "+(oddsum+=i));
//      ;
// }
// console.log("even sum is "+evensum,"odd sum is "+oddsum);

// q.6 print all factor of number

// let num=Number(prompt("entr a number"))

// for (let i =1;i<=Math
//     .floor(num/2);i++){
//     if(num%i==0){
//         console.log(i);
        
//     }
// }
// console.log(num);

// q.7 prime number

// let n = Number(prompt("Enter number"));
// if (n <= 1) { 
//     console.log(false);
// } else if (n === 2) { 
//     console.log(true);
// } else {
//     let isPrime = true;  // Flag to track if n is prime
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     console.log(isPrime);
// }

// q.8 calculate power of n number


// let a=Number(prompt("enter first number whatever"))
// let b=Number(prompt("enter second number whatever"))
// let ans=1;
// for(let i=1;i<=b;i++){
//   ans=ans*a
// }
// console.log(ans);


let random=Math.floor(Math.random() * 100) +1
// console.log(random);

let user=-1
while(user!==random){
    user=Number(prompt("enter a number "))
    
    if(user>random){
        console.log("too high..");
        
    }
    else if(user<random){
        console.log("too low...");
        
    }
    else{
        console.log("congrates you win ✌🏻");
        
    }
    
    // let user=Number(prompt("enter a number "))
}