// transpose matrix

const prompt=require("prompt-sync")()

let row=Number(prompt("enter size"))
let col=Number(prompt("enter size"))
let arr=new Array(row);

for(let i=0;i<arr.length;i++){
    arr[i]=new Array(col);
    for(let j=0;j<arr[i].length;j++){
        arr[i][j]=Number(prompt("ele"));
    }
}



for(let i=0;i<arr.length;i++){
    for(let j=arr.length-1;j>=0;j--){
        if(arr[i][j]==0){
            arr[i][j]+=1;
            
        }
        else {
            arr[i][j]=0;
        }
        process.stdout.write(arr[i][j]+" ");
    }
    console.log();
    
}
// for(let i=0;i<arr.length/2;i++){
//     for(let j=i;j<arr.length-i;j++){
//         process.stdout.write(arr[i][j]+" ");
//     }
// }
// for(let i=arr.length-1;i>arr.length/2;i--){
//     for(let j=1;j<=i;j++){
//         process.stdout.write(arr[j][i]+" ");
//     }
// }
// for(let i=arr.length-1;i>arr.length/2;i--){
//     for(let j=i-1;j>=arr.length-i-1;j--){
//         process.stdout.write(arr[i][j]+" ");
//     }
// }
// for(let i=0;i<=(arr.length/2)-1;i++){
//     for(let j=i+1;j<arr.length-i-1;j++){
//         process.stdout.write(arr[j][i]+" ");
//     }
// }




// for(let i=0;i<row;i++){
//     for(let j=0;j<col;j++){
//         process.stdout.write(arr[j][i]+" ");
//     }
//     console.log();
    
// }

// 1 2 3  
// 4 5 6
// 7 8 9

// 7 4 1
// 8 5 2
// 9 6 3
// console.log("90 deg ");

// for(let i=0;i<row;i++){
//     for(let j=col-1;j>=0;j--){
//         process.stdout.write(arr[j][i]+" ");
//     }
//     console.log();
    
// }


