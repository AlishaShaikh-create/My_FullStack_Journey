// Async Function -> return the promise 
// now u can apply the .then and .catch method

async function greet(){
    // Abc.abc()
    return "hello World"
}
console.log(greet()) // output : return the promise

greet().then((res)=>{
    console.log("promise was resolved")
    console.log("the result is :",res)
})
.catch((err)=>{
    console.log("the promise is rejected")
    console.log("the error is",err)
})

// making the arrow function as the async function

let demo =async()=>{
    return "I am async"
}

console.log(demo)