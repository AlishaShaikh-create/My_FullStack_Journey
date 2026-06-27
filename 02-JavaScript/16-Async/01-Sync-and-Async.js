// //  Synchronous  means the code runs in a particular sequence of instruction given in the program.Each instruction waits for the previous instruction to complete its execution
// // This is the synchronous programming

// console.log(1)
// console.log(2)
// console.log(3)

// // Asynchronous : 
// console.log("One")
// setTimeout(()=>{
//     console.log("Hello World")
// },2000)
// console.log("Two")

// // output :
// // one
// // two 
// // Hello World

// // Callbacks : A call is the function which is passed as an argument to another function

// function sum(a,b){
//     console.log(a+b)
// }

// function calculator(a,b,sum_callback){
//     sum_callback(a,b)
// }
// calculator(1,2,sum)

// //callback hell :
// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("Data",dataId)
//          if(getNextData){
//         getNextData()
//     }
//     },2000)
   
// }
// // getData(456,getData(1)) // -> this is not the way of writing because getData(1) will get immediately executed

// // callback hell : Nested callback stacked below one another forming a pyramid structure .(Pyramid of Doom)
// getData(1,()=>{
//     console.log("Getting data 2....")
//     getData(2,()=>{
//         console.log("Getting data 3....")
//         getData(3,()=>{
//             console.log("Getting data 4....")
//            getData(4)
//         })
//     })
// })

// // Promise : Promise is for "eventual" completion of task. It is an Object in JS.
// // It is an solution to callback hell.
// let promise = new Promise((resolve,reject)=>{})

// let promise = new Promise((resolve , reject)=>{
//     console.log("I am promise")
//     // resolve("Success")
//     reject("failure")
// })    
// console.log(promise)


// function getData(dataId , nextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data",dataId)
//             resolve("Success")
//             if(nextData)(
//                 nextData()
//             )
//         },5000)
//     })
// }

// let result = getData("alisha 12",()=>{
//     getData("Tohid 11")
// })
// console.log(result)


// // then and catch in promise
// function getPromise(){
//     return new Promise((resolve,reject)=>{
//         let value = false
//         if(value){
//             resolve("Success")
//         }else{
//             reject("Failure")
//         }
//     })
// }

// let promise = getPromise()
// promise.then((res)=>{
//     console.log("Promise was resolved",res)
// })
// promise.catch((err)=>{
//     console.log("Promise was rejected",err)
// })



// function getPromise(dataId,getNextData){
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//             console.log("Data",dataId)
//             resolve("Success")
            
//         },2000)
//     })
// }

// // Promise Chaining :
// getPromise(1).then((res)=>{
//     console.log(res,":promise 1 resolved.. calling to promise 2")
//    return getPromise(2);
// }).then((res)=>{
//     console.log(res,":promise 2 resolved.. calling to promise 3")
//     return getPromise(3)
// })

// Async function
async function Hello(){
    console.log("Hello")
}
async function api() {
     new Promise((resolve , reject)=>{
         setTimeout(()=>{
            console.log("weather data");
            resolve(200)
         },2000)
    })
    
}
async function getWeatherData(){
    await api() // 1
    await api() // 2
}

getWeatherData()


function getData(dataId,getNextData){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            console.log("Data",dataId)
            resolve("Success")
            
        },3000)
    })
}

// Async
async function get_datas(){
    await getData(1)
    await getData(2)
    await getData(3)
}
get_datas()