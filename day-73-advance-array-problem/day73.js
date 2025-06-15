// moves zero right side

// Q.1 amp e
// Sample Input
// 5
// 01011
// Sample Output
// 11100
// Example 2
// Sample Input
// 6
// 101010
// Sample Output
// 111000

// let arr=[0,1]

// let j=0,i=0;
// while(i<arr.length){
//     if(arr[i]==0)
//         i++;
//     else{
//     let temp=arr[i];
//     arr[i]=arr[j];
//     arr[j]=temp;
//     j++
//     i++;
//     }
// }
// console.log(arr);

// Q2.. maximum of Subarray
// 1 2 3 4 5
// Sample Output
// 15
// Example 2
// Sample Input
// [2,4,-1, 2, 3, -4, 5]
// Sample Output
// 11

// let arr=[2,4,-1, 2, 3, -4, 5];
// let sum=0,max=arr[0];

// for(let i=0;i<arr.length;i++){
//     sum+=arr[i];
//     if(sum>max){
//         max=Math.max(max,sum)
//     }
//     if(sum<0){
//         sum=0
//     }
// }
// console.log(max);

// Q3. find majority element in n/2 length
// Sample Input
// [5,5,5,2,3,5,5,1,5]
// Sample Output
// [-1,-1,-2,-1,-1]
// Example 2
// Sample Input
// -1
// Sample Output
// let arr=[5,5,5,2,3,5,5,1,5]
// let count=0;
// let ans=0;
// let i=0

// while(i<arr.length){
//     if(count==0){
//         ans=arr[i]
//         count=1
//     }
//     else if(arr[i]===ans){
//         count++;
//     }
//     else{
//         count--;
//     }
//     i++
// }
// console.log(ans);


//Q.4Best Time to Buy and Sell StockSample Input
// [1,2,3,4,5]
// Sample Output
// 4
let arr=[1,2,3,4,5]
let maxprofit=0;
let min=arr[0];

for(let i=0;i<arr.length;i++){
   
    if(min<=arr[i]){
        min=Math.min(min,arr[i])
    }
    maxprofit=Math.max(maxprofit,(arr[i]-min))
}
console.log(maxprofit);
