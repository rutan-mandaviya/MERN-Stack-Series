// question 1= sorting arry reverse direction and remove duplicate value 
// var arr=[1,2,3,1,2,4,5,3,6,3,2,7,4]
// console.log([...new Set(arr)]);

// var ans=arr.sort((a,b)=>(a))
// console.log(ans);

// console.log([...new Set(arr)].sort(function(a,b){
    //     return b-a;
    // })[6]);
    
    
 // question2: find how much type particular value are repetaed in array
var arr=[1,3,3,1,2,4,5,3,6,3,2,7,4]
var obj={
    
}
arr.forEach((val)=>(obj[val] == undefined ? obj[val]=1 : obj[val]++))