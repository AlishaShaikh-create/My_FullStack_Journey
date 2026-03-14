// setInterval 

// SYNTAX:

// setInterval(function , timeout )
// setInterval() executes a function again and again after a specified number of milliseconds

// clearInterval(id) : To stop the setInterval()
let count=1
const id= setInterval(()=>{
    console.log(count)
    count+=1
    if(count == 5){
        clearInterval(id)
    }
}, 2000)


