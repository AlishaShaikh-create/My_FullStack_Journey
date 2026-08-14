import { useState } from "react";
function UpdatingObjects(){
    const [obj,setObj] = useState( {
        name : "Alisha",
        age:23,
        city : "hyderabad"
    })

    function handleClick(){
        setObj((prev)=>({
            ...prev,
            name: "Tohid"
        })

        )
    }
    return (
        <>
        <p>{obj.name}</p>
        <p>{obj.age}</p>
        <p>{obj.city}</p>

        <button onClick={handleClick}> Click me</button>
        
        </>
    )
}

export default UpdatingObjects;