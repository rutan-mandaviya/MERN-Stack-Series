const prompt = require("prompt-sync")();
let n = Number(prompt("enter a number"));

// q.1 ----------------------
// for (let i=1;i<=n;i++){
//     for (let j=1;j<=n;j++){
//         process.stdout.write("* ")
//     }
//    console.log();
// }

//q-2--------------

// for (let i=1;i<=n;i++){
//     for (let j=1;j<=i;j++){
//         process.stdout.write("* ")
//     }
//    console.log();
// }

// q-3---------------

// for (let i=1;i<=n;i++){
//     for (let j=1;j<=i;j++){
//         process.stdout.write(j+"  ")
//     }
//    console.log();
// }

// q-4---------------
// for (let i=1;i<=n;i++){
//     for (let j=1;j<=n-i+1;j++){
//         process.stdout.write("*")
//     }
//    console.log();
// }

// q.5-------------

// A-65,B=66,C=67
// a-97,b=98,c=99
// for(let i=0;i<=200;i++){
//     process.stdout.write(String.fromCharCode(i)+" ");
// }

// for (let i=1;i<=n;i++){
//     let temp=65;
//     for (let j=1;j<=i;j++){
//         process.stdout.write(String.fromCharCode(temp));
//         temp++;
//     }
//    console.log();
// }

// q--6
// for (let i=1;i<=n;i++){

//     for(let s=1;s<=n-i;s++){
//         process.stdout.write(" ")
//     }
//     for (let j=1;j<=i;j++){
//         process.stdout.write("*")
//     }
//    console.log();
// }

// q-7
// for (let i=1;i<=n;i++){

//     for(let s=1;s<=n-i;s++){
//         process.stdout.write(" ")
//     }
//     for (let j=1;j<=i;j++){
//         process.stdout.write("* ")
//     }
//    console.log();
// }

// q-8

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     if (i == j || i + j == n + 1) process.stdout.write("* ");
//     else {
//       process.stdout.write("  ");
//     }
//   }
//   console.log();
// }

// q-9

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n * 2 - 1; j++) {
//     if (i == j || i + j == n * 2) {
//       process.stdout.write("* ");
//     } else {
//       process.stdout.write("  ");
//     }
//   }
//   console.log();
// }

// q-10
