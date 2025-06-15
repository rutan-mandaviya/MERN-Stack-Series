// recursion questions

// Q1. sum of n digits


// function sumOfDigti(a){
//     if(a<=0) return  0
//     return (a%10)+sumOfDigti(Math.floor(a/10))
// }
// let a=934;
// console.log(sumOfDigti(a));


// Q2. revrse of digit using recursion


// function revrseNumber(n,rev=0){
//   let sign=1;

//   if(n<0){
//     sign=-1
//     n=-n;
//   }
//   for(let pos=1;pos<=n;pos*=10){
//     let digit=(Math.floor(n/pos)%10);
//     rev=(rev*10)+digit
   
//   }
  
//  return rev*sign
// }
// console.log(revrseNumber(1234));

// Q3.   gcd of numbers

function gcd(num1,num2){
   if(num2==0) return num1

    return gcd(num2,num1%num2)

}
console.log(gcd(1,2));
