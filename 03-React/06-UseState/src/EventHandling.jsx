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

function EventHandling(){
    const[name,setName] = useState("")
    function handleChange(event){
        
        setName(event.target.value)
    }
    return(
        <>
        <form >
            <input onChange={handleChange} value={name} placeholder="enter the name" />
            <h1>Name = {name}</h1>
            <button type="submit">Click me</button>
        </form>
        
        
        </>
    )
}
export default EventHandling