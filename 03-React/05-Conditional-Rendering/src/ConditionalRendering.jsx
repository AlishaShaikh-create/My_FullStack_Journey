import React from 'react'

//  using the  Logical &&  for conditioncal Rendering
// const ConditionalRendering = () => {
//     const AdminPanel = true
//   return (
//     <>
//      {
//         AdminPanel && <h1>Admin Panel</h1>
//      }
//     </>
//   )
// }


// Using the if Statement for conditional rendering 

const ConditionalRendering = () => {
    const age = 17;
    if(age >= 18){
        return <h1>Eligible to vote</h1>
    }else{
        return <h1>Not Eligible to vote</h1>
    }
 
}

export default ConditionalRendering

