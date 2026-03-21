// Reduce 
// reduce the array to a single value

// arr.reduce(reducer function with 2 variable for(accumulator , element))

let arr =[1,2,3,4,5]
let result = arr.reduce((res,ele)=>(res+ele));
console.log(result)

let multiply = arr.reduce((acc, ele)=>(acc*ele),1)
console.log(multiply)

