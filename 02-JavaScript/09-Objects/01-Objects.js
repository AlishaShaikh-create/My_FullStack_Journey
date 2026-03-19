// Object literals used to store the key value collection

// property => key ,value pair

// object and object literals are 2 different things

const student={
    name:"Alisha",
    age:'23',
    roll_number:"5m0"
}
console.log(student) // { name: 'Alisha', age: '23', roll_number: '5m0' }
console.log(typeof student) // Object

// obj does not have any order
// const student only store the reference (address) we can add or even delete the value

// accessing the value
console.log(student['age']) // 23


// changing the value
student.name="Tohid"
console.log(student) // { name: 'Tohid', age: '23', roll_number: '5m0' }

const post={
    username:"@lish",
    likes:100,
    content:" First Content",
    repost:5
}


console.log(post)
let prop="repost"
console.log(post[prop]) // 5
console.log(post.prop) // undefined

let number={
    1:'a',
    2:'b',
    3:'c'
}
console.log(number) // { '1': 'a', '2': 'b', '3': 'c' }

console.log(number[1]) //a

// console.log(number.1) => this line give u an error 

// Js automatically convert the object  keys into the stirng Even if we made number as the key , the number will be converted into the string

// number[1] here 1 is not the number but the string

// ADD AND UPDATE VALUE

const college={
    name:"xyz college ",
    entablished:1990
}
console.log(college)
console.log(college.name)

college.principle="doreamon" 
console.log(college)

// output:{ name: 'xyz college ', entablished: 1990, principle: 'doreamon' }


