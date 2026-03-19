// Arrow function
let arr = [1,2,3,4,5,6,7,8,9,10]
arr.forEach( (nums) =>{
    console.log(nums)
})

arr.map( (ele) => {
    return ele *2
})
console.log(arr)

let newarr=arr.filter( (ele)=>{
   return ele%2!==0
})
console.log(newarr)

