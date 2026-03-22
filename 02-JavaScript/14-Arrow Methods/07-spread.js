//Spread 

//Expand the iterable into multiple values

// function func(...arr){
//     // do somethings
// }

let arr = [1,2,3,4,5]
console.log(...arr)

console.log(Math.min(...arr))

console.log(..."Alisha Shaikh")

// Spread with Array Literals

let array = [1,2,3,3,4,5,9]
let newarr = [...array]
console.log(newarr)
newarr.push(6)
console.log(newarr)
console.log(array)

let odd=[1,3,5,7]
let even=[2,4,6,8,10]
let number = [...odd ,...even]
console.log(number)

// spread with object literals

let data={
    email:'iromman@gmail.com',
    password:123
}
let dataCopy = {...data , id:'#1'}
console.log(dataCopy) // 
console.log(data)


let obj={...arr}
console.log(obj)