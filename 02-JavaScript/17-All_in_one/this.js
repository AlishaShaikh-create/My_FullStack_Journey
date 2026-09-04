
let a = 10;
let b = a ;
b = 20
console.log(a) // 10
console.log(b) //20 


const user ={
    name : 'Alisha',
    address :{
        city : 'hyderabad'
    }
}

const user2 = {...user}
user2. name = "Rahul"
console.log(user.name)

console.log(user2.name)


console.log(user.address == user2.address)

console.log(user.name)
user2.address.city = "channai"
console.log(user.address.city)