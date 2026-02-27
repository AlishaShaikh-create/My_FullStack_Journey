// // Even or odd problem

// import read from 'readline-sync'

// let number=read.questionInt("Enter the number:")
// if(number%2==0){
//     console.log("Even")
// }else{
//     console.log("odd")
// }


// Largest of 3 Numbers

let num1=read.questionInt("Enter the 1st number:");
let num2 =read.questionInt("Enter the second Number:");
let num3=read.questionInt("Enter the 3rd number:");

if((num1>num2) && (num1>num3)){
    console.log("Number 1 is greater", num1)
}else if((num2>num3) && (num2 > num1)){
    console.log("Number 2 is greater",num2);
}else{
    console.log("Number 3 is greater",num3)
}

