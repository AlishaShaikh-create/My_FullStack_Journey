// Why languages 

// RAM : Random Access memory -> current this that are running in the ram
// SSD : Solid State Drive [ permenent memory ]-> it shores the application

// VLC ->VideoLAN Client a free open source media player

// The C++ compiler is called as g++

// Javascript is an interpreted language 
console.log("hello welcome to harkirat cohort")

console.log("HEllo world");

// Browser can only understand HTML/CSS/JS (not technically true)
// Thanks to Node.js Js can also used in backend

// JS is dynamic type language which allow you to change the type of the variable

let number = 10
number="alisha"
console.log(number)

// Single threaded nature of the js

// Js can only use one of these cores at a time It is single threaded this is why it is considered to be the bad langauge for scalable system there is a way to make it use all the cores of your machine 

// Program to greet a person based on their first name and last name 

function greet(first,last){
    console.log(`Hello ${last} ${first}`);
}
greet("Alisha","Shaikh")

// greet the person based on their gender

import read from 'readline-sync'

let gender=read.question("Enter your Gender:");
if((gender=="female"))
{
    console.log("hello Miss")
}else{
    console.log("hello Mr")
}

// write a program that count from 0 to 10 and print
for(let i=0;i<=10;i++){
    console.log(i)
}