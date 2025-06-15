// let str="rutan";
// — Q35. Accept a string from user and print each character on a new line

// for(let i=0;i<str.length;i++){
//     console.log(str[i]);
// }

// — Q36. Accept a string and print it in reverse order

// let reversed="";
// for(let i=str.length-1;i>=0;i--){
//     reversed+=str[i];
// }
// console.log(reversed);


// Q37. Check if string is palindrome (using two-pointer)

// function ispalindrome(pal){
//     let left=0;
//     let right=pal.length-1;

//     while(left<right){
//         if(pal[left]!==pal[right]){
//             return false;
//         }
//         left++;
//         right--;
//     }
//     return true;
// }
// let pal="nanan";
// console.log(ispalindrome(pal));


// Q38. Toggle each alphabet using ASCII values

// Example usage:
// console.log(toggleCase("AcgDfD")); // Output: "aCGdFd"

// let result="";
// for(let i=0;i<str.length;i++){

//     if(str[i]>='a' && str[i]<='z'){
//        result+=String.fromCharCode(str.charCodeAt(i)-32);
       
//     }
//     else if(str[i]>='A' && str[i]<='Z'){
//         result+=String.fromCharCode(str.charCodeAt(i)+32);
        
//     }
//     else{
//         result+=str[i];
//     }
    
// }
// console.log(result);


// Q39. Count words with given prefix

// Example usage:
// console.log(countPrefix(["pay","attention","practice","attend"], "at")); // Output: 2

// function countprefix(words,pre){
//  let count=0;
//     for(let word of words){
//         if(word.startsWith(pre))
//             count++;
//     }
// return count;
// }

// console.log(countprefix(["adf","bana","ans","ban"],"ba"));


// Q40. Capitalize first & last character of each word

// let s="hello rahul Go how are you"

// let ans="";
// let ansarr=s.split(" ")

// for(let i=0;i<ansarr.length;i++){
//     let word=ansarr[i];
//     // if(word.length<=2) ans+=word.toUpperCase()+" ";
//     // else{
//         ans+=word.charAt(0).toUpperCase()
//         +word.substring(1,word.length-1)
//         +word.charAt(word.length-1).toUpperCase()+" ";
//     // }
// }
// console.log(ans);

// q41. strin is angram or not

// function isangram(s1,s2){
//     let frq=new Array(123).fill(0);
//     let isangram=true;

//     if(s1.length!=s2.length){
//         isangram=false;
//     }
//     else{
//     for(let i=0;i<s1.length;i++){
//         let ch=s1.charCodeAt(i);
//         frq[ch]++;
//     }
//     for(let i=0;i<s2.length;i++){
//         let ch=s2.charCodeAt(i);
//         frq[ch]--;
//     }
//     for(let i=0;i<frq.length;i++){
//         if(frq[i]!=0){
//             isangram=false;
//             break;
//         }
//     }
//     }
//     return isangram
// }

// let s1="caar";
// let s2="raac"

// console.log(isangram(s1,s2));


// Q42. find feq in string


function frqcounter(s1){
    let frq=new Array(123).fill(0);

    for(let i=0;i<s1.length;i++){
        let char=s1.charCodeAt(i);
        frq[char]++;
    }
    for(let i=97;i<frq.length;i++){
        if(frq[i]>0){
            console.log(String.fromCharCode(i)+": "+frq[i]);
        }
    }
}

let s1="rutanpatel";
frqcounter(s1);