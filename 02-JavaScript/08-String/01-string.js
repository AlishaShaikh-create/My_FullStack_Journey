// String are immutable in js
let str="Hello World"
// STRING METHODS
// str.toUpperCase() -> convert the string into the upper case
console.log(str.toUpperCase()) //HELLO WORLD
console.log(str)

// str.toLowerCase() -> Convert the string into the lower case
console.log(str.toLowerCase()) //hello world

//indexOf : to get the index of the particular word or character in the string 
// if the word is not present then return the -1 
console.log(str.indexOf('H')) // 0
console.log(str.indexOf("World")) // 6 return the starting index of the particular word

// String character chaining

str="     Alisha      Shaikh    "
console.log(str.trim().toUpperCase())

// Slice method :
// str.slice(start,end)

str="I love coding"
let new_str=str.slice(2,6)
console.log(new_str) // love

// replace 

console.log(str.replace('love','teach')) // I teach coding

// repeat
str="mango"
console.log(str.repeat(3)) //mangomangomango
