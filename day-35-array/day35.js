// arrayyyyyyyyyyyyyyyyyy is linear data structure linear==sequnce follow and continous store element
const prompt=require("prompt-sync")()
console.log();
let n = prompt("enter number")

// strong number

// let copy=n;
// let ans=0;
// while(n>0){
//     let digit=n%10;
//     let fact =1
//     for(let i=1;i<=digit;i++){
//         fact*=i;
//     }
//     ans=ans+fact;
//     n=Math.floor(n/10) 
// }

// if(copy==ans) console.log("strong number");
// else console.log("not a strong number");

// q-2-----------------------

// let arr=[1,2,3,4];
// arr.push(100) -----> insert a last
// arr.unshift(102) ---------> insert a first
// arr.shift()-------> delet at first
// arr.pop() ---------> delete a last
// arr[10]=1000
// console.log(arr);
// console.log(arr[5]);
// console.log(arr.length);
// let arr = new Array(5);//method two to make new arry
// arr[0]=1
// arr[1]=1
// arr[2]=1
// arr[3]=1
// console.log(arr);


// array input
let arr=new Array(n)
for(let i=0;i<n;i++){
    arr[i]=prompt("enter  "+(i+1)+" element ")
}
console.log(arr);
