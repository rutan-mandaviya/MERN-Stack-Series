// sorting

const prompt=require("prompt-sync")()

console.log();

// stable & unstable

// q-1  ------------- bubble sort

// let arr=[12,3444,5,6,642];

// for(let i=0;i<arr.length-1;i++){
//     for(let j=0;j<arr.length-i-1;j++){
//     if(arr[j]>arr[j+1]){
//         let temp=arr[j];
//         arr[j]=arr[j+1]
//         arr[j+1]=temp;
//     }
// }
// }
// console.log(arr);

// q-2 ----------selection sort

// let arr=[2,4,5234,522,64];

// for(let i=0;i<arr.length-1;i++){
//     let small=i;
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[j]<arr[small]){
//             small=j;
//         }
//     }
//     if( i != small){
//         let temp=arr[i];
//         arr[i]=arr[small];
//         arr[small]=temp;
//     }
// }
// console.log(arr);

      
// insersion sort

let arr=[23,23,1,7,5,32]

for(let i=1;i<arr.length;i++){
    let key=arr[i];
    let j=i-1;
    while(j>=0 && arr[j]>key){
        arr[j+1]=arr[j];
        j--;
    }
    arr[j+1]=key;
}
console.log(arr);

