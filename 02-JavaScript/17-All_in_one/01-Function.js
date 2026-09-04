
// Arrow Function :
// const total = (price , quantity)=>{
//     return price * quantity
// }
// console.log(total(20,5))

const total = (price , quantity) => price * quantity
console.log(total(20,5))

function multiply(a, b) {
    return a * b;
}

const mul = (a , b)=>{
    return a *b
}
console.log(mul(10 , 20))

let multi = (a , b)=>a*b
console.log(mul(10 , 20))


// call back 
// function greet(name){
//     console.log("hello",name)
// }




function process_user(callback){
    callback("Alisha")
}
process_user((name)=>{
    console.log("hello",name)
})

const numbers = [10, 20, 30, 40];
let element = numbers.map((ele)=> ele * 3)
console.log(element)

const number = [10, 15, 20, 25, 30, 35];
let greater = number.filter((ele)=>ele > 20 )
console.log(greater)
number.forEach((ele)=>{
    console.log(ele)
})

const fruits = ["Apple", "Banana", "Mango"];
fruits.forEach((ele)=>{
    console.log(ele)
})

const great = number.find((ele)=> ele > 25)
console.log(great)

const num = [5, 12, 18, 25, 30];
let number_15 = num.find((ele)=>ele > 15)
console.log(number_15)

const ages = [15, 17, 21, 16];
const hasages = ages.some((ele)=> ele >= 18)
console.log(hasages)