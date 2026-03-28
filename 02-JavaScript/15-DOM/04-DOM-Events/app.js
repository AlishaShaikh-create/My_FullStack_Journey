let btns = document.querySelectorAll('button')
console.dir(btns)

// btn.onclick = function ()
// {
//     alert("button was clicked")
// }


function sayhello(){
    alert("hello")
}
function sayName(){
    alert("Alisha")
}

// btn.onclick=sayhello

// for(let i =0 ; i<btns.length;i++){
//     btns[i].onclick = sayhello
// }

// --> onclick and onmouseenter

// for(let btn of btns){
//     btn.onclick = sayhello
//     btn.onmouseenter = function(){
//         console.log("You Enter the button")
//     }
// }


// Drawback of onclick and other function:
// onclick and onmouseenter only execute the single function we cannot run the multiple function
for(let btn of btns){
    btn.onclick = sayhello
    btn.onclick = sayName

}


// Event Listener
// syntax : addEventListener(event , callback)

for(let btn of btns){
    btn.addEventListener("click", function(){
        console.log("Event listerner")
    })
    btn.addEventListener("click", sayName)
    btn.addEventListener("click", sayhello)
}


// this keyword in js
let h3= document.querySelector('h3')
let p = document.querySelector('#para')
let button=document.querySelector('#btn')


function changeColor(){
    console.log(this.innerText)
    this.style.color='blue'
}

p.addEventListener("click",changeColor)
h3.addEventListener("click",changeColor)
button.addEventListener("click",changeColor)


// event argument

button.addEventListener("click",function(event){
    console.dir(event) // pointerEvent
})

// keyboard Event
let input = document.querySelector('input')
let b = document.querySelector('.submit')
input.addEventListener("keydown",(event)=>{
    console.dir(event)
    console.log("key was pressed")
    console.log("key=",event.key)
    console.log("code=",event.code)
})




