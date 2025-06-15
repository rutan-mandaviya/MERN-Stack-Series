// String

const prompt=require("prompt-sync")()
let str="rutan"

// length
console.log(str);
// slice
console.log("slice__________");

console.log(str.slice(1,-1));
console.log(str.slice(-1));
console.log(str.slice(0));

// substring
console.log("substring__________");
console.log(str.substring(3));//an
console.log(str.substring(0,7));//rutan
console.log(str.substring(7));//"  "

// substr

console.log("substr && slice_______");
console.log(str.substr(2));

// tolowercase && uppercase

console.log("tolowercase && uppercase_______");
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// concat
console.log("concat______");
console.log(str.concat(" patel"));//rutan patel

// trim
console.log("trim_____");
console.log(str.trim());//remove space

// indexof(substring)
console.log("indexof______");
console.log(str.indexOf("tan"));//2 "t" is start with 2
console.log(str.indexOf("tcn"));//-1 c is not in string

// startwith
console.log("startwith____");
console.log(str.startsWith("r"));//true
console.log(str.startsWith("t"));//false

// endwith
console.log("endwith_______");
console.log(str.endsWith("n"));//true

// replace
console.log("replace______");
console.log(str.replace('ru','u'));
console.log(str.replaceAll('rutan','r'));

// split

console.log("split_________");
console.log(str.split("t"));
console.log(str.charCodeAt(3));//ascii vlaue return
console.log(str[0]);

