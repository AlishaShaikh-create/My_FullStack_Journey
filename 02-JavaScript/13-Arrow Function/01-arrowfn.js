// Arrow Function
// const func=(arg1 , arg2 )=>{ function defination}

// Arrow function are name less function

const sum=(a , b) =>{
    console.log(a + b)
}
sum(2,3)
console.log(sum)

const cube=(n)=>{
    return n*n*n
}

let c=cube(3)
console.log(c)

const hello=()=>{
    console.log("Hello World")
}
hello()



let arr=[1,2,3]
const arrAvd=(arr)=>{
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    return sum/arr.length
}
console.log(arrAvd(arr))