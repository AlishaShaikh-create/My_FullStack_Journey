let nums = [10,21,30]
let result = nums.every((ele)=>ele%10==0)
console.log(result)

let min=nums.reduce((min,ele)=>{
    if(ele>min){
        return min
    }else{
        return ele
    }
})
console.log(min)