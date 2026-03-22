// Rest : Allows  a function to take infinite number of arguments and bundle them in an array

function sum(...args){
    for(let i =0; i<args.length;i++){
        console.log("argument value", args[i])

    }

}
sum(1,2,3,4)

// finding the sum of the element
function sumOfElement(...args){
    return args.reduce((acc,ele)=>acc+ele)
}

console.log(sumOfElement(12,23,2,3))