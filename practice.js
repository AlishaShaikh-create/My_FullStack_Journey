import read from 'readline-sync'
let n=read.questionInt("Enter the number:")
function iseven(n){
    if(n%2==0){
        console.log("Even number")
    }else{
        console.log("Odd Number")
    }
}

iseven(n)