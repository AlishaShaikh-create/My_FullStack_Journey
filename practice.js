

// Reverse the number

let num=12345
// console.log(num%10)
// let digit=Math.floor(num/10)
// console.log(digit)

let digit=""

while(num>0){
    let value=num%10 
    num = Math.floor(num/10)
    digit+=value

}
console.log(digit)



