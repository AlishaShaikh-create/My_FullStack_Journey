import { useState } from "react"

// function UpdatingObjects(){
//     const [user,setUser] = useState({
//         name : "Alisha",
//         age:23,
//         city : "hyderabad"
//     })
//     return (
//         <>
//         <h1>{user.name}</h1>
//         <h1>{user.age}</h1>
//         <h1>{user.city}</h1>
//         </>
//     )
// }
// export default UpdatingObjects

function changeName (){
    const [user, setUser] = useState({
  name: "Rahul",
  age: 25,
  city: "Delhi"
});

function handleName(){
    setUser({
        ...user,
        name : "Amit",
    })
}
function handleAge(){
    setUser(prev =>({
        ...prev,
        age : prev.age+1
    }))
}
function handleCity(){
    setUser(prev =>({
        ...prev,
        city : "Mumbai"
    }))
}

    

    return(
        <>
        <h1>{user.name}</h1>
        <h1>{user.age}</h1>
        <h1>{user.city}</h1>
        <button onClick={handleName}>Change Name </button>
        <button onClick ={handleAge }>Change age </button>
        <button onClick ={handleCity}>Change city </button>
        </>
    )
}

export default changeName