// // Q45. two sum using map


// let map=new Map();

// let arr=[1,2,8,7,3]
// let taret=9;

// for(let i=0;i<arr.length;i++){
//     if(map.has(taret-arr[i])){
//        console.log(map.get(taret-arr[i])+" "+i);
//        break;
//     }
//     else{
//         map.set(arr[i],i);
//     }
// }
// console.log(map);


// Q-47  math frequncy first frq math then return char

// let map=new Map();
// let s="abcdffesb"

// for(let i=0;i<s.length;i++){
//     if(map.has(s[i])){
//         console.log(s[i]);
//         break;
//     }
//     else{
//         map.set(s[i],1)
//     }
// // }

// // Q48--- sort height array and name 

// let map=new Map();

// let height=[180,165,170]
// let name=["remma","emma","mary"]

// for(let i=0;i<height.length;i++){
//     map.set(height[i],name[i])
// }
// height.sort((a,b)=>b-a)
// let ans=[];
// for(let i=0;i<height.length;i++){
//     ans.push(map.get(height[i]))
    
// }
// console.log(ans);

// function reverseDigits(n,rev=0) {
//   if( n<=0) 
//   return rev
//   else
//   return rev
// function countPrimes(n) {
   
//     if (n < 2) return 0; // no primes less than 2

//     let count = 0;

//     for (let j = 2; j <= n; j++) {
//         let isPrime = true;

//         for (let i = 2; i * i <= j; i++) {
//             if (j % i === 0) {
//                 isPrime = false;
//                 break;
//             }
//             // console.log(i);
            
//         }

//         if (isPrime) {
//               process.stdout.write(j + " "); 
//               count++;}
//     }

//     return count;
// }

// console.log(countPrimes(15));
