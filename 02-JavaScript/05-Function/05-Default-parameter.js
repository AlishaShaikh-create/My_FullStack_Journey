// Default parameter

function sum(a,b=3){
    console.log(a+b)
}
sum(2)
sum(2,10)

 
function sum(a=1,b){
    console.log(a+b)
}
sum(2,4) // 6 here i will get output as 6 because a=2 and b=4
sum(30) // this will give me an error because a=30 and still be is undefined 

