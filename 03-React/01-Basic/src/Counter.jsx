import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count , setCount] = useState(0)
    const handelIncrement =()=>{
        setCount(count+1)
        setCount(count+1)
    }
    // const handleDecrement =()=>{
    //     setCount(prev => count-1)
    // }
    // const handleReset =()=>{
    //     setCount(0)
    // }
  return (
    <>
    <h1>{count}</h1>
    <button onClick={handelIncrement}>Increment</button>
    {/* <button onClick={handleDecrement}>Decrement</button>
    <button onClick={handleReset}>Reset</button> */}
    </>
  )
}

export default Counter