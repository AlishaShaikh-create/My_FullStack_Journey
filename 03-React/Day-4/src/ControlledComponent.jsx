import { useState } from "react"
function ControlledComponent(){
    const[name , setname] = useState("")

    function handleChange(event)
    {
        setname(event.target.value)

    }
    return (
        <>
        <div>
            <h1> Hi , {name}</h1>
            <h1>Count = {name.length}</h1>
            <input type="text" value ={name} placeholder="Enter your name" onChange={handleChange} />
            
            
        </div>
        </>
    )
}
export default ControlledComponent