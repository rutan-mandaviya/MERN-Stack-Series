// multi dimension array

const prompt=require("prompt-sync")()

// let arr=[[1,2,3],[4,5,6],[7,8,9]]

// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//     process.stdout.write(arr[i][j]+" ");
    
// }
// console.log();
// }

let row=Number(prompt("enter row"));
// let arr=new Array(row);
let col=Number(prompt("enter col"));
// for(let i=0;i<arr.length;i++){
//     arr[i]=new Array(col);
//     for(let j=0;j<arr[i].length;j++){
//         arr[i][j]=Number(prompt("ele"));
      
//     }
//     console.log();
   
// }
// console.log(arr);
// let leftsum=rightsum=0;
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//        if(i==j ){
//           leftsum+=arr[i][j];
//         }
//         if(i+j==arr.length-1){
//            rightsum+=arr[i][j];

//        }
//     }
// }

let arr=Array.from({length:row},()=>Array(col).fill(1));
// console.log(leftsum+" "+rightsum);
console.log(arr);





  
// console.log(arr);
