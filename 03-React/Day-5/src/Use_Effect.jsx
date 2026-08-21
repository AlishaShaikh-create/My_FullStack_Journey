import { useEffect } from "react";
import { useState } from "react";

function Use_Effect(){
    const[count , setCount] = useState(0);
    
    // useEffect for the clean up
     useEffect(()=>{
        console.log("Effect Ran") ;
        return()=>{
            console.log("Clean UP")
        };
     },[])

    return(
        <>
        <h1>{count}</h1>
         <button onClick={()=>setCount((prev)=>prev+ 1)}>Increment</button>
        </>
    )

}
export default Use_Effect