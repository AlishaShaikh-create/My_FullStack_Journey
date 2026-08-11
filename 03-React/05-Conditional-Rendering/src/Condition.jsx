// function Condition(){
     
//     const isLoggedIn = true
//     if (isLoggedIn){
//         return <h1>Welcome</h1>
//     }
//     return <h1>Please Login </h1>
// }

// export default Condition;

// import { useState } from "react";
// function Condition(){
//      const[isLoggedIn , setisLoggedIn] = useState(false)
//      function handleClick(){
//         setisLoggedIn(true)
//      }
//      if(isLoggedIn){
//         return <h1>Welcome!</h1>
//      }
    
//      return(
//         <>
//         <h1>Please Logged In</h1>
//         <button onClick={handleClick}>Login</button>
//         </>
//      )
// }

// export default Condition;


// ternary operator
import { useState } from "react";
function Condition(){
    const[isLoggedIn , setIsLoggedIn] = useState(false)
    return(
        <>
        <h1>{isLoggedIn ?"Welcome":"Please Login"}</h1>

        <button
        onClick={()=>{
            setIsLoggedIn(prev =>!prev)
        }}
        >{isLoggedIn?"Log Out": "Log In"}</button>

        
        </>
    )

}

export default Condition
