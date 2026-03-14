// forEach 

// arr.forEach(some function definition or name)
// forEach already loop through the array so u dont have to loop again
// do not return any thing
let arr = [ 1 ,2 ,3,4,5]

arr.forEach((nums)=>{
    console.log(nums)
})

// output : 
// 1
// 2
// 3
// 4
// 5

let print= function(nums){
    console.log(nums)
}

arr.forEach(print)

let array=[{
    name: "alisha",
    marks:90
},{
     name: "ali",
    marks:86
},{
     name: "alis",
    marks:47
}]

// I want to print the marks for each object
array.forEach((ele)=>{
    console.log(ele.marks)
})