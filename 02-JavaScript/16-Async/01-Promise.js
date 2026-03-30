// to overcome the callback we use the promise

//PROMISE: The Promise object represent the eventual completion or failure of an async operation and its resulting value

// Promise is object

function savetoDb(data){
    return new Promise((success,failure)=>{
        let internetSpeed = Math.floor(Math.random()*10 +1)
        if(internetSpeed > 4){
            success('success: The data was saved')
        }
        else{
            failure("failure: The data was not saved")
        }
    })
}
let result = savetoDb("alisha")
console.log(result)

// Creating a promise 
let res = new Promise((resolve,reject)=>{
    let success =false
    if(success){
        resolve("task completed")
    }else{
        reject("task not completed")
    }
})

console.log(res)

// difference between the resolve and reject

const p = new Promise((resolve,reject)=>{
    resolve("hello")
})
console.log(p)

p.then((result)=>{
    console.log(result)
})


// Creating the promise and then and catch method
let output = new Promise((resolve,reject)=>{
    let number = Math.floor(Math.random*10+1)
    if(number > 4){
        resolve("The number is greater than four")
    }else{
        reject("The number  is less than or equal to four")
    }

})



output.then((r)=>{
    console.log(r)
})
.catch((r)=>{
    console.log(r)
})

// promise chaining



