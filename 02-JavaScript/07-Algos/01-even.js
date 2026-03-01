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