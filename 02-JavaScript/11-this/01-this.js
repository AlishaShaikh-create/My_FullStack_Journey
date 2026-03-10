// this  keyword 
// for global scope default value of this is window object
// console.log(this==window) // true 

// this refer to the object that is executing the current piece of code
const student={
    name:"Alisha",
    age: 23,
    greet:function(){
        return "hello "+ this.name
    }

}
console.log(student.name)
console.log(student.greet())

// for normal function -> is window or undefined

// this (arrow function ) -> inherit from the parent scope

// let name={
//     name:"Alisha",
//     greet:()=>{
//         console.log(this.name)
//     }
// }
// name.greet() // output: typeerror: undefined


// this with constructor

function person(name){
    this.name = name
    
}

const p1 = new person("Shizuka")
console.log(p1.name)


