// Map
// let newarr= arr.map(some function definition or name)
// map is used to return the value and create a new array as well

let num=[1,2,3,4,5]

let double=num.map((ele)=>{
    return ele*2
})
console.log(double)

let array=[{
    name: "alisha",
    marks:90
},{
     name: "sana",
    marks:86
},{
     name: "neha",
    marks:47
}]

// Function to convert the marks in gpa

let gpa=array.map((ele)=>{
    let gpa=ele.marks/10
    return gpa
})

console.log(gpa)