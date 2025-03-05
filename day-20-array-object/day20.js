// what is array

// Array is a collection of elements of diffrent type stored in contiguous memory locations and are indexed by continuous integers in js like.
// array is hetrogenus

let arr = [1, "hello", true, [1, 2, 3], {name: "John"}, function() { console.log("Hello"); }];

console.log(arr); // [1, 'hello', true, [1, 2, 3], {name: 'John'}, function () { console.log('Hello'); }]

// Accessing elements of array

console.log(arr[0]); // 1
console.log(arr[1]); // "hello"
console.log(arr[4].name); // John
console.log(arr[5]()); // Hello

var arr1=new Array(2);
var arr1=new Object(2);
// Changing elements of array

arr[0] = 5;
console.log(arr[0]); // 5

arr[4].name = "Jane";
console.log(arr[4].name); // Jane

// Adding elements to array

arr.push(6); // [5, 'hello', true, [1, 2, 3], {name: 'Jane'}, function () { console.log('Hello'); }, 6]
arr.unshift(0); // [0, 5, 'hello', true, [1, 2, 3], {name: 'Jane'}, function () { console.log('Hello'); }, 6]

// Removing elements from array

arr.pop(); // [0, 5, 'hello', true, [1, 2, 3], {name: 'Jane'}, function () { console.log('Hello'); }]
arr.shift(); // [5, 'hello', true, [1, 2, 3], {name: 'Jane'}, function () { console.log('Hello'); }]

// Splicing elements from array

arr.splice(1, 2); // [5, [1, 2, 3], {name: 'Jane'}, function () { console.log('Hello'); }]

// Checking if array contains a specific element

console.log(arr.includes(5)); // true
console.log(arr.includes(7)); // false



// object is a collection of key value pair
// object is hetrogenus
// object is mutable
// object is not iterable
// object is unordered
// object is not indexed
// object is not duplicate key
// object is not duplicate value
// object is not duplicate key value pair
// object is not sorted
// object is not sliced
// object is not spliced
// object is not pushed
// object is not popped
// object is not shifted

let obj = {
    name: "John",
    age: 30,
    city: "New York",
    hobbies: ["reading", "painting"],
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    },
    sayHello: function() {
        console.log("Hello!");
    }
};

console.log(obj); // { name: 'John', age: 30, city: 'New York', hobbies: ['reading', 'painting'], address: { street: '123 Main St', city: 'New York', state: 'NY' }, sayHello: [Function: sayHello] }

// Accessing elements of object

console.log(obj.name); // John
console.log(obj.address.street); // 123 Main St

// Changing elements of object

obj.name = "Jane";
console.log(obj.name); // Jane

obj.address.city = "Los Angeles";
console.log(obj.address.city); // Los Angeles

// Adding elements to object

obj.email = "john@example.com";
console.log(obj.email); // john@example.com

// Removing elements from object

delete obj.email;
console.log(obj.email); // undefined

// Checking if object contains a specific key

console.log("name" in obj); // true
console.log("email" in obj); // false

// Checking if object contains a specific value

console.log(obj.hasOwnProperty("name")); // true
console.log(obj.hasOwnProperty("email")); // false

