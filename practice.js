let arr=[1,2,3,4,5,6]
let square = arr.map((ele)=>ele*ele)
let sum = square.reduce((acc,ele)=>acc+ele)
let avg=sum/arr.length
console.log(avg)

let plus5=arr.map((ele)=>ele+5)
console.log(plus5)

let str=['alisha','tohid']
let upper=str.map((ele)=>ele.toUpperCase())
console.log(upper)

function doubleAndReturnArgs(...args){
    let newarr=args.map((ele)=>ele*2)
    let result = [...args,...newarr]
    console.log(result)
}
doubleAndReturnArgs(1,2,3,4)
