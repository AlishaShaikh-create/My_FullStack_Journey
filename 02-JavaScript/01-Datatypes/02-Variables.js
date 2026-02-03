// Variables are "named storage" for data.

// let keyword used to create a variable
// var -> older syntax
// const -> If You want to variable value should not be changed

let message=" Let keyword message."
console.log(message)

// mutliple varible declaration this  can be done but not recommended.

let user="John", age=25 ,  msg="hello";

console.log(user,age,msg)

// Older script , you may find var instead of let 

var messgae = "This is  var keyword message";
console.log(message)

let hell="the end "
console.log(hell)
hell="the start"
console.log(hell)


// The variable name can start with $ and _ 
// Variable name cannot start witht the number
// Reserved keyword cannot be used as name of the varible 
// JavaScript is case sensitive language 'Age' and 'age are different

const num=5
console.log(num)
// num=6
// console.log(num) // Error : Assignment to constant variable


// TASK VALUE FROM JAVASCRIPT.INFO
let admin;
let name="John"
admin=name
console.log(admin)