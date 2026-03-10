// Higher order function does one of this task
// 1 takes other function as parameter
// 2 return other function

function greet(name){
    return "hello "+ name;
}

function processUserr(callback){
    let name='Shaikh Alisha'
    return callback(name)
}

console.log(processUserr(greet))

function multiple(func,n){
    for(let i = 0 ; i<n;i++){
        func()
    }
}

function greet_name(){
    console.log("hello world")
}

multiple(greet_name,3)

function multiple_number(n){
    return function(){
        n*n+3
    }
}

// Function that return the other function 
function multiply(x){
    return function(y){
        return x*y
    }
}
const double=multiply(2)
console.log(double(5))