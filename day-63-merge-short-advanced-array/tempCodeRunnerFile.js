// merger sort 

//  sorting two sorted array


// let arr1=[1,2,3]
// let arr2=[4,5,6]

// let arr3=new Array(arr1.length + arr2.length);

// let i=0,j=0,k=0;
// while(i<arr1.length && j<arr2.length){
//     if(arr1[i]<arr2[j]){
//         arr3[k]=arr1[i];
//         k++;
//         i++;
//     }
//     else{
//         arr3[k]=arr2[j];
//         k++;
//         j++;
//     }

// }
// while(i<arr1.length) arr3[k++]=arr1[i++]
// while(j<arr2.length) arr3[k++]=arr2[j++]
// console.log(arr3);

// QQleet code 88 mergesort code two sorted array to upadte first array

// let arr1=[10,20,0,0]
// let arr2=[5,15]
// let m=2,n=2;
// let i=m-1;j=n-1;k=arr1.length-1;

// while(i>=0 && j>=0){
//     if(arr1[i]>arr2[j]){
//         arr1[k]=arr1[i];
//         i--;
//         k--;
//     }
//     else{
//         arr1[k]=arr2[j]
//         j--;
//         k--;
//     }
// }
// while(j>=0) arr1[j]=arr2[j--]
// console.log(arr1);

//Q24   make a duplicate zeros

// let arr=[1,2,3,0,3]
// let count=0
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==0)
//         count++
// }
// let j=(arr.length-1)+count
// let i=arr.length-1
// while(i!=j){
//     if(j<arr.length){
//         arr[j]=arr[i];
//     }
//     j--

    
//     if(arr[i]==0){
//         if(j<arr.length){
//             arr[j]=arr[i]

//         }
//         j--
//     }
//     i--
// }
// console.log(arr)

// kadans algoritham add longest sum os subarary

// let arr=[-2,2,-4,-2,4]
// let sum=0,maxsum=0;
// for(let i=0;i<arr.length;i++){
//     sum=sum+arr[i];
//     if(sum>maxsum){
//         maxsum=sum
//     }
//     if(sum<0){
//         sum=0
//     }
   

// }
// console.log(maxsum);


// ///////////find majority elemnt in aray

// let arr=[3,3,3,1,1,1]
// let count=0;//1 
// let ans=arr[0]//3
// for(let i=1;i<arr.length;i++){
//    if(count==0)
//    {
//   ans=arr[i]//3 
//   count=1//1
//    }
//   else if(arr[i]!==ans){
//     count--
//   }
//   else{
//     count++
//   }
// }
// console.log(ans);

// ///profit losss array

let arr=[7,1,2,3,4,5,6]

let cureentprofit=0,maxprofit=0;
let min=arr[0]
for(let i=0;i<arr.length;i++){
   if(arr[i]<arr[min]){
    min=arr[i]
    console.log(min+1);
    
   }
   else{
    cureentprofit=arr[i]-min
    // console.log(cureentprofit);
    
    if(cureentprofit>=maxprofit){
        maxprofit=cureentprofit
        // cureentprofit=0
    }
    // cureentprofit=0
   }
}
console.log(maxprofit);
