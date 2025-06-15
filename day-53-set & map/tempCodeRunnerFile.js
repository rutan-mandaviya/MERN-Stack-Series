//Q1.   charcater frepp in string 


// let str="hello"

// let frq=new Array(123).fill(0);

// for(let i=0;i<str.length;i++){
//     let ch=str.charCodeAt(i);
//     frq[ch]++;
// }
// let i=0;

// while(i<frq.length){
//     if(frq[i]){
//         console.log(String.fromCharCode(i)+" : "+frq[i]);
//     }
//     i++;

// }


//Q2.  // count jwels in stones

let jwels="aAb";
let stones="aAAbbbb"

let sett=new Set();

for(let i=0;i<jwels.length;i++){
    sett.add(jwels[i])
}

