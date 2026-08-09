import { useState } from "react"
// Handle Click :- onClick
// function EventHandling(){
//    const[count,setCount] = useState(0);

//    function handleClick(){
//             setCount(prev=>prev+1)
//    }
//     return(
//         <>
//         <h1>Button Clicked:{count}</h1>
//          <button onClick={handleClick}>Click me</button>
//         </>
//     )
// }
// export default EventHandling

// onChange :-

// function EventHandling(){
//     const[name,setName] = useState("")
//     function handleChange(event){
        
//         setName(event.target.value)
//     }
//     return(
//         <>
//         <form >
//             <input onChange={handleChange} value={name} placeholder="enter the name" />
//             <h1>Name = {name}</h1>
//             <button type="submit">Click me</button>
//         </form>
        
        
//         </>
//     )
// }
// export default EventHandling


// # onSubmit
function EventHandling(){
    const [name , setName] = useState("");
    const[email , setEmail] = useState("")
    const[submitName , setSubmitName] = useState("")
    const[submitEmail , setSubmitEmail] = useState("")


    function handleSubmit(event){
         event.preventDefault()
         console.log("Form Submittted")
         setSubmitEmail(email)
         setSubmitName(name)
    }


    function handleChangeName(event){
        setName(event.target.value)
        
    }

    function handleChangeEmail(event){
        setEmail(event.target.value)
        
    }


    return(
        <>
        <form onSubmit={handleSubmit}>

            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter name" id="name" onChange={handleChangeName} value={name}/>

            <br />

            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter Email" id="email" onChange={handleChangeEmail} value ={email}/>

              <br />
            <button type="submit">Submit</button>

        </form>

        <h1>After Submitting</h1>
        <p>Name : {submitName}</p>
        <p>Email : {submitEmail}</p>
        </>
    )
}




export default EventHandling 
