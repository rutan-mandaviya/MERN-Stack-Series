const prompt=require("prompt-sync")()
console.log();
let n = prompt("enter number")

// let arr=new Array(n);
// for (let i=0;i<n;i++){
//     arr[i]=prompt("enter  "+(i+1)+" element " )
// } 
// q-1 sum of number

// let sum=0;
// while(n>0){
//     rem=n%10
//     sum+=rem
//     n=Math.floor(n/10)
// }
// console.log(sum);


// q-2 find mid digit in number

// let n = prompt("enter number")
// let count=0;
// let copy=n;
// while(n>0){
//     count++
//     n=Math.floor(n/10)
// }
// // console.log(count);
// let mid=Math.floor(count/2);
// // console.log(mid);
// let i=0;
// let midDigit=0;
// while(i<=mid){
//     midDigit=Math.floor(copy%10)
//     copy=Math.floor(copy/10)
//     i++
// }
// console.log(midDigit);

// q-3 max element of array

// let max=arr[0];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i]
//     }
// }
// console.log(max);

// q-4 second max
// let max=Math.max(arr[0],arr[1]);
// let smax=Math.min(arr[0],arr[1]);
// for(let i=2;i<arr.length;i++){
//   if(arr[i]>max){
//     smax=max;
//     max=arr[i];
//   }
//   else if(arr[i]>smax && arr[i] !=max){
//     smax=arr[i]
//   }
// }
// console.log(smax);

// q-5 second minimum elemnt find in array

// q-6 reverse array
// let arr=[1,1,0,1,0,1,0,1];
// let temp=new Array(n);
// let i=0;
// for(let j=arr.length-1;j>=0;j--){
//     temp[i]=arr[j];
//     i++;
// }
// console.log(temp);



// method 2

// let i=0,j=arr.length-1;

// while(i<j){
//     let temp=arr[i];
//     arr[i]=arr[j];
//     arr[j]=temp;
//     i++;
//     j--;

// }
// console.log(arr);

//q---------6 all zeros to left and all one is right side in array
let arr=[0,0,1,1,0]
let i=0,j=0;

while(i<arr.length)
    {
  if(arr[i]!==0){
    i++;
  }
  else{
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
    j++;
    i++;
  }
}
console.log(arr);

// q-------7 lest side rotation in array

// let arr=[2,4,5,7,23,67,3];
// let temp=arr[0]

// for(let i=0;i<arr.length;i++){
//     arr[i]=arr[i+1];
// }
// arr[arr.length-1]=temp;
// console.log(arr);
