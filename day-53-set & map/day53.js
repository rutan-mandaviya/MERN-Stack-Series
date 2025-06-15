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

// let jwels="aAa";
// let stones="aAAbbbb"

// let sett=new Set();

// for(let i=0;i<jwels.length;i++){
//     sett.add(jwels[i])
// }
// // console.log(sett);
// let count=0
// for(let i=0;i<stones.length;i++){
//     if(sett.has(stones[i])){
//         count++;
//     }
// }
// console.log(count);

//Q.3 check is sentence is panagram


// let a="abcdefghijklmnopqrstuvwxy"

// let set=new Set();

// for(let i=0;i<a.length;i++){
//     set.add(a[i])
// }
// console.log(set.size);

// if(set.size===26){
//    console.log(true);
   
// }
// else{
//     console.log(false);
    
// }

// Q4. happy number

// function happynumber(num){
// let sum=0;

// let set=new Set();
// while(true){
//     let sum=0
// while(num>0){
//     let rem=num%10;
//     sum=sum+(rem*rem);
//     num=Math.floor(num/10);
// }

// if(sum==1) return true;
// if(set.has(sum)) return false;
// set.add(sum);
// num=sum;
// }
// }
// console.log(happynumber(10));
