import {useState , useEffect} from 'react'
function Practice(){
    const[count , setCount ] = useState(0)
    useEffect(()=>{
        console.log("Count Mounted");
    } , [])
    return(
        <>
        <h1>Count ={count}</h1>
        <button onClick={
            ()=>{
                setCount((prev)=>prev+1)
            }
        }>Increment</button>
        </>
    )
}
export default Practice