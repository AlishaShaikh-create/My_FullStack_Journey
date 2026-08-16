import { useState } from "react"
function ToggleTask(){
    const[tasks , setTasks] = useState([
  {
    id: 1,
    title: "Learn React",
    completed: false
  },
  {
    id: 2,
    title: "Practice JavaScript",
    completed: false
  },
  {
    id: 3,
    title: "Build Todo App",
    completed: false
  }
]);

function handleClick(id){
  setTasks((prevTasks)=>(
    prevTasks.map((ele)=>(
      ele.id === id ?{ ...ele , 
        completed: !ele.completed} : ele
      


    ))
  ))

}




    return(
        <>
        {
            tasks.map((ele)=>( <div key = {ele.id}>
                <h1>{ele.title}</h1> 
                {
                  ele.completed ? <p>Completed</p> : <p>Pending </p>
                }
                <button  onClick={()=> handleClick(ele.id)}>Click me </button>
                

            </div>))
        }



        
        </>
    )
}

export default ToggleTask