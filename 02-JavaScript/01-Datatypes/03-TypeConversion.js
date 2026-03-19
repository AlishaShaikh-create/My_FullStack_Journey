// Type Conversion sometimes happen automatically

// Most of the time operator and function automatically convert the given value to the right type

// we do  not expecitely need to convert it 

// String Conversion
let msg=true;
console.log(typeof msg) 
msg=String(msg)
console.log(msg)

//Numeric Conversion
// Operators automatically convert the string into number
console.log("6"*"2")
let num="12"
console.log(typeof num)
num=Number(num)
console.log(typeof num)

let num1=Number(undefined);
console.log(num1) // NaN
num1= Number(null)
console.log(num1) 
