//Q.1 contain with most water 


// let arr=[1,8,6,3,5,4,8,4,7]

// let i=0;j=arr.length-1;
// let ans=0
// while(i!=j){
    
//     ans=Math.max(ans,Math.min(arr[i],arr[j])*(j-i))
//     if(arr[i]<arr[j]){
//         i++;
//     }
//     else{
//         j--;
//     }
// }
// console.log(ans);

// Q.2///Trapping Rain Water


// Sample Input
// [0,2,1,0,3,1,0,1,2,1,2,1]
// Sample Output
// 8

let arr=[0,2,1,0,3,1,0,1,2,1,2,1]
//leftarr[2,2,3]
//rightarr[3,3,3]
//ans=itr1=2-2=0
//ans=itr2=2-1=1---->gretest no.
//ans=itr3=3-3=0
// ans=1

let rightmax=0
let right=[]

for(let i=arr.length-1;i>=0;i--){
    rightmax=Math.max(rightmax,arr[i])
    right.push(rightmax)
}
console.log(right);
let leftmax=0;
let ans=0
for(let i=0;i<arr.length;i++){
    leftmax=Math.max(leftmax,arr[i])
   
    
    
    ans+=(Math.min(leftmax,right[arr.length-i-1])-arr[i])
}
console.log(ans);



// Q.3 sort color

// let arr=[2,1,2,0,1,0]

// // [0,0,1,1,2,2]op is

// let i=0;j=0,k=arr.length-1;

// while(i<=k){
    
//     if(arr[i]==1){
//         i++;
//     }
//     else if(arr[i]===0){
//         let temp=arr[i];
//         arr[i]=arr[j];
//         arr[j]=temp;
//         j++;
//         i++;
//     }
//     else if(arr[i]==2){
//         let temp=arr[i];
//         arr[i]=arr[k];
//         arr[k]=temp;
//         k--;
//     }


// }
// console.log(arr);
