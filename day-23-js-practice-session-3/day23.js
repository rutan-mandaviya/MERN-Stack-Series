
// 15. Use a for...of loop to iterate over the string "JavaScript". let str = "JavaScript";

let str = "erfc";

for (let cha of str) {
    console.log(cha);
}
// 16. Remove duplicate values from an array. let arr = [1, 2, 3, 2, 4, 3, 5];

let arr = [1, 2, 3, 2, 4, 3, 5];
var ans= [...new Set(arr)]

console.log(ans);

// 17. Find the second largest number in an array. function secondLargest(arr) 

let arr1 = [1, 2, 3, 4,4,5, 5];
console.log([...new Set(arr1)].sort((a, b) => b - a)[1]);

// 20. Find the most frequent element in an array.

let arr2 = [1, 2, 3, 4, 4, 5, 5, 5];

var obj={

}
arr2.forEach(function (val){
    obj[val]==undefined ? (obj[val]=1): obj[val]++;

})

// console.log(obj);
