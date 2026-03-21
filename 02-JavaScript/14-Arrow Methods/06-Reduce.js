// Reduce 
// reduce the array to a single value

// arr.reduce(reducer function with 2 variable for(accumulator , element))

let arr =[1,2,3,4,5]
let result = arr.reduce((res,ele)=>(res+ele));
console.log(result)

let multiply = arr.reduce((acc, ele)=>(acc*ele),1)
console.log(multiply)

// finding the maximum of the array using the reduce function

let nums = [-1,-2,-2]
let res = nums.reduce((max ,ele)=>{
    if(ele > max){
        return ele
    }else{
        return max
    }
})

console.log(res)

