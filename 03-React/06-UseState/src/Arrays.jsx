import { useState } from "react"
function Arrays(){
    const[tasks,settasks] = useState(["learn react","practice java script","DSA"])
    // Adding the element
    function handleChange(){
        settasks((prev)=>[
            ...prev,
            "build ToDo"
        ])
    }
    // deleting the element using the filter function
    function deletelist(){
        settasks((prev)=>(
            prev.filter(ele => ele !== 'DSA')
        ))
    }
     
    // Updating the items 
    function updatinglist(){
        settasks((prevtask)=>(
            prevtask.map((task)=> task == 'learn react' ? "learn python" : task)
        ))
    }
   return(
    <>
    <ul><b>List of task</b>
        {
            tasks.map((ele)=>(
                <li>{ele}</li>
            ))
        }
    </ul>
    <button onClick={handleChange}>Add tasks</button>
    <button onClick ={deletelist}>Delete task</button>
    <button onClick ={updatinglist}>updating the list</button>
    </>
   )
}
export default Arrays