// Hoisting : 
// Hoisting means javascript moves the declaration on the top the scope before executing the code .
// 💡NOTE : DECLARATION IS HOISTED NOT ASSIGNMENT

console.log(a)
var a=10

// here we might except the error because a is not defined but we get output as "undefined"

// Javascript interprets the internal code as 
// var a;
// console.log(a)
// a=10

// 📦 2️⃣ let and const Hoisting:

// console.log(b)
// let b=20

// Output : ReferenceError: Cannot access 'b' before initialization

// the let and const are even hoisted but they are placed in the TEMPORAL DEAD ZONE

// FUNCTION HOISTING : 
greet()
function greet(){
    console.log("hello")
}

// the function is fully hoisted:
// what happens internally is that:
// function greet() {
//   console.log("Hello")
// }

// greet()

// function Expression is not fully hoisted:

hi()
const hi=function(){
    console.log("hi")
}
// output : ReferenceError: Cannot access 'hi' before initialization

//Because only the variable is hoisted — not the function value.
// const hi // hoisted (but in TDZ)

// hi()  // ❌ can't access yet

// hi = function() {
//   console.log("Hello")
// }

// 🎯 Why Hoisting Exists?

// Because during execution, JavaScript has two phases:
// 1.Creation Phase
//    -> Memory is allocated
//    -> Declarations are registered
// 2.Execution Phase
//    -> Code runs line by line

// Hoisting happens in the creation phase.

