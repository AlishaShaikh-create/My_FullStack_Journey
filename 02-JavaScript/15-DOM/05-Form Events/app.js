let form = document.querySelector('form')

// form events
form.addEventListener("submit",(event)=>{
    event.preventDefault()

    alert('Form submitted')
})

// Extracting data from the form

form.addEventListener('submit' ,  function(event){
    event.preventDefault()
    let input = document.querySelector('input')
    console.dir(input)
    console.log(input.value)

})

// change and input events
let input =document.querySelector('.it')
input.addEventListener('input',(e)=>{
    console.log("input value:",e.target.value);
})

input.addEventListener('change',(e)=>{
    console.log('change value',e.target.value)
})