// map filter reduce

const number=[1,2,3,4,5,6,7,8,9,10,11,12]

// var ans=number.map((items,index)=>{
//     return items
// }
// )
// console.log(ans)

// var ans1=number.filter((items,index)=>{
//     return items%2==0
// })

// console.log(ans1)

var ans2=number.reduce((accumulator,currentValue)=>{
    return currentValue
},0)

console.log(ans2)




