// Every 
// Return True if every element of the array gives true for some function.Else return False

// similar to logical And &&

let arr=[2,4,6,8,10]
let result=arr.every((ele)=>{
    return ele%2==0
})
console.log(result) // true

let ans=[2,35,45,12].every((ele)=>(ele % 2 == 0))
console.log(ans) // false
 