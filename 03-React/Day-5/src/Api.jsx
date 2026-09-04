import { useEffect } from "react"
function Api(){
    useEffect(()=>{
        async function getData (){
            const response = await fetch('"https://jsonplaceholder.typicode.com/users"')
            const data = await response.json()
            
            console.log(data)

        }
        getData()
    } , [])
    return (
   <h1>Api</h1>
    )
}

export default Api