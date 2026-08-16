import { useState } from "react";
function UpdatingArrays(){
    const [tasks , setTasks] = useState(["learn react","practice java script","DSA"])

    function AddTask(){
        setTasks((prev)=>[
            ...prev,
            "Build the todo app"

        ])
    }

    
   return (
    <>
    {
        tasks.map((ele)=>{
            return <h1>{ele}</h1>
        })
    }
    
    </>
   )
}
export default UpdatingArrays