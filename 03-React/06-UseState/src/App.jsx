import { useState } from "react";
import EventHandling from "./EventHandling";
import Arrays from "./Arrays";
function App() {
  const[name,setName] = useState("Alisha")
  const[age,setAge] = useState(23)



  return (
    <>
      {/* <h1>{name}</h1>
      
      <h1>{age}</h1>
     
      <button onClick={()=>{
        setName("tohid")
      }}> Click me</button>     */}

      <Arrays/>



    </>
  );
}

export default App;