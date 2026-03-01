/**
 *Write a function to print all the even numbers form 1 to 100
 */

function isEven(){
    for(let i =0;i<=100;i++){
        if(i%2==0){
            console.log(i)
        }
    }
}

isEven(4)

// Function to print even numbers from start and end

function Evenseries(start,end){
    for(let i=start;i<=end;i++){
        if(i%2==0){
            console.log(i)
        }
    }
}

Evenseries(100,110)

// function to add 2 numbers
function sum(a,b){
    console.log(a+b);
}

sum(2,3)

// check if the array has even numbers 
// and return a new array with array of even numbers.
const arr = [2, 4, 77, 66, 13, 17, 19, 33, 45, 67];
let newarr=[]
function even(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
           newarr.push(arr[i])
        }
    }
    return newarr;
}
console.log(even(arr))