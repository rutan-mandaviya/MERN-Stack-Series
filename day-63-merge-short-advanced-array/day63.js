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

// let arr1=[1,5,0,0]
// let arr2=[2,3]
// let m=2,n=2;
// let i=m-1;j=n-1;k=arr1.length-1;

// while(i>=0 && j>=0){
    
//     if(arr1[i]>arr2[j]){//5>3
//         arr1[k]=arr1[i];//k=5
//         i--;//i==1
//         k--;//k==4
//         console.log(j);
//     }
//     else{
//         arr1[k]=arr2[j]//k==4==1>3=3

//         j--;//1
//         k--;//
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

// let arr=[7,1,2,3,4,10,6]

// let cureentprofit=0,maxprofit=0;
// let min=arr[0]
// for(let i=0;i<arr.length;i++){
   
//    if(arr[i]<min){
//     min=arr[i]
    
//    }
//    else{
//     cureentprofit=arr[i]-min

    
//     if(cureentprofit>=maxprofit){
//         maxprofit=cureentprofit
       
//     }
    
//    }
// }
// console.log(maxprofit);

let height=[0,2,1,0,3,1,0,1,2,1,2,1]
  let left=[]
    let right=[]
   
    
    let leftmax=height[0]
    for(let i=0;i<height.length;i++){
        if(height[i]>leftmax){
            leftmax=height[i];
            left.push(height[i]);
        }
        else{
        left.push(leftmax);
        }   
    }
    
     let rightmax=height[height.length-1];
    for(let i=height.length-1;i>=0;i--){
        if(height[i]>=rightmax){
            rightmax=height[i];
            right.push(height[i]);
        }
        else{
        right.push(rightmax);
        }   
    }
  let ans=0
    for(let i=0;i<height.length;i++){
        ans+=Math.min(left[i],right[right.length-i-1])-height[i]
    }
    console.log(left);
    console.log(right);
    console.log(ans);
    
    