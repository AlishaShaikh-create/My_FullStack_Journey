const user = {
    name: "Rahul",
    age: 22,
    city: "Hyderabad", 
    greet : function (){
        return "hello from js "
    }
};
console.log(user.greet())
// Dot notation
console.log(user.name)
// bracket notation 
console.log(user["name"])

let property = 'age'
console.log(user[property])


const student ={
    name : "Alisha",
    age : 23,
    course : 'CSE ',
    Skills : ['python', 'react', 'java script']

}
console.log(student.name)
console.log(student.course)
console.log(student.Skills[0])
console.log(student)


const {name , age , Skills} = student
console.log(name)
console.log(age)
console.log(Skills)

const colors = ["red", "green", "blue"];
let [first , second , third] = colors
console.log(first)
console.log(second)
console.log(third)