

// Reverse the number

let num=12345
// console.log(num%10)
// let digit=Math.floor(num/10)
// console.log(digit)

let digit=""

while(num>0){
    let value=num%10 
    num = Math.floor(num/10)
    digit+=value

}
console.log(digit)



// primenumber checker
let n=8
let count=0
for(let i=1;i<=n;i++){
    if(n%i==0){
        count+=1
    }
}
 if(count==2){
        console.log("prime")
    }else{
        console.log("not prime")
    }


let name=function(){
    console.log("Hello")
}    

name()

// copying one function to another
function greet(){
    return "Alisha"
}
let hi=greet
console.log(hi())
console.log(greet())