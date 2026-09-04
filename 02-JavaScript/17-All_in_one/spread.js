const fruits = ["Apple", "Banana"];
// adding the item 
let  newFruit = [...fruits , "orange"]
console.log(newFruit)
newFruit = ['grapes',...fruits]
console.log(newFruit)


const student = {
    name: "Alisha",
    age: 23
};
const studentCopy = {
    ...student , 
    course : 'CSE'
}
console.log(studentCopy)

const updateStudent = {
    ...student,
    age : 25
}
console.log(updateStudent)

function print(...number)
{
    console.log(number)
}
print(10 ,20 , 30 , 40)

function parameter (first , second , ...remaining)
{
    console.log(first)
    console.log(second)
    console.log(remaining)
}
parameter (10,20,30, 40 ,50, 60)

let numbers =[10 ,20 , 30 , 40]
let total = numbers.reduce((sum , ele )=>{
    return sum + ele
},0)
console.log(total)