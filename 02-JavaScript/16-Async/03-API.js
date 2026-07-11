let URL = "https://catfact.ninja/fact"

//Syntax :  let promise = fetch(URL, [option]);

let promise = fetch(URL);
console.log(promise)

let factPara = document.querySelector("#facts")
let btn = document.querySelector('#btn')


// Async way of writing the code
const getFacts = async() =>{
    console.log("getting data")
       let response  = await fetch(URL);
       console.log(response) //json format 
       let data = await response.json(); // this conversion is an async function so we need  an await .
       factPara.innerText = data.fact 

       
}

btn.addEventListener("click",getFacts)



