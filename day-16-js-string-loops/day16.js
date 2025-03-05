//1. slice in string

var st="rutan"
let ans=st.slice(2,4)//position 2se 3 tak print hoga
console.log(ans);

//2. templates string
// let name=prompt("what is the name ?")

console.log(`My name is ${name}`);

//3. split in string

var st="how are u??"
console.log(st.split("r"));
//output is [how a,e u??]

//4. replace

let str = "i am currently live in india but i just swift in germany";
let replaceone = str.replace("i","is") //replace only one times
console.log(replaceone);


let replaceall=str.replaceAll("i","is") //replace all element
console.log(replaceall);

// 5. includes
let str1 = "Hell World";
let n = str1.includes("World");
console.log(n);

//6. forloop
// let arr=[1,2,3,4,5,6,7,8,9,10]
// for (let i=0; i<arr.length;i++)
// {
//     console.log(arr[i]);
// }
// let i=0;

// while(i<arr.length){
//     console.log(arr[i]);
//     i++;
// }

// 7. break & continue
let arr=[1,2,3,4,5,6,7,8,9,10]

for (let i=0; i<arr.length;i++)
{
    if(i==5){
        break;//it means stop the block of code
    }

    console.log(arr[i]);
}
for (let i=0; i<arr.length;i++)
{
    if(i==5){
        continue;//it means skip this value
    }

    console.log(arr[i]);
}

