import { useState , useEffect } from "react";
function Timer(){
    const [count , setCount] = useState(0)
    const [isRunning , setIsRunning] = useState(false);


    useEffect(()=>{
        if (!isRunning){
        return;
    }

    console.log("timer started");

    const timer = setInterval(()=>{
        setCount((prev)=>prev+1)
    },1000)

    return ()=>{
        console.log("Timer Stopped");
        clearInterval(timer)
        
    }
    },[isRunning])


    return (
        <>
        <h1>Timer :{count}</h1>
        <button onClick={()=>setIsRunning(true)}>Start</button>
        <button onClick ={()=>setIsRunning(false)}>Stop</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        </>
    )
}

export default Timer