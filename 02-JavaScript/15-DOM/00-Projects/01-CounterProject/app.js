let h1=document.querySelector('h1')
let plus = document.getElementById("increment")
let minus = document.getElementById("decrement")
let reset = document.getElementById('reset')

let count = 0
plus.addEventListener("click",()=>{
      count = count +1
       h1.innerText = count
})

minus.addEventListener("click",()=>{
    count = count -1
    h1.innerText = count
})

reset.addEventListener("click",()=>{
    count = 0
    h1.innerText = 0
})
