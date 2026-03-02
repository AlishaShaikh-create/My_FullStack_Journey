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


// only a single digit. Push it into a new array and return.

const arr1 = [2, 4, 77, 66, 13, 17, 19, 33, 45, 67,9,23,2,5,67];
const newarr1=[]
function singleDigit(arr1){
    for(let i=0;i<arr1.length;i++){
        if(arr1<10){
        newarr1.push(arr1[i])
        }
    }
    console.log(newarr1)
}

// Write an algorithm to find if a given array has any primes numbers
//  and store it a new array.

const arr2 = [2, 4, 77, 66, 13, 17, 19, 33, 45, 67,9];
function isPrime(num){
    let count=0
    for(let i=2;i<num;i++){
        if(num%i==0){
            count++
        }
    }
    return count==0? true:false
}

console.log(isPrime(78))

function isPrimeNumberInArray(arr2){
    let new_arr=[]
    for(let i=0;i<arr2.length;i++){
         if(isPrime(arr2[i])){
           new_arr.push(arr2[i])
         }
    }
    return new_arr
}

console.log("The element in the array with out prime number")
console.log(isPrimeNumberInArray(arr2))