import { useState } from "react";
function UpdatingObjects(){
    const [obj,setObj] = useState( {
        name : "Alisha",
        age:23,
        city : "hyderabad"
    })
    return (
        <>
        <p>{obj.name}</p>
        <p>{obj.age}</p>
        <p>{obj.city}</p>
        
        </>
    )
}

export default UpdatingObjects;