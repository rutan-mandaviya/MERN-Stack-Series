// local storage

// localStorage.setItem('name','rutan')
// localStorage.setItem('age',50)
// let age=localStorage.getItem('age')
// console.log(age);
// // localStorage.clear()
// localStorage.removeItem('age')
// localStorage.reload()


// local storage set object

let ans=localStorage.getItem('arr')
let newans=JSON.parse(ans)
console.log(newans);
