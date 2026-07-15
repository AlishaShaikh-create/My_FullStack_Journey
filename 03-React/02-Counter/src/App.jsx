import { useState } from "react";
import './App.css'
function App() {
 
  let [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter((prev) =>{
         if(prev == 20){
            return prev
         }
         return prev + 1
    })
  };

   const decrement = () => {
   
    setCounter((prev) =>{
        if(prev == 0){
            return prev
        }
        return prev - 1
    })
  };
  return (
    <div className="container">
      <div className="counter-card">
        <h1>Counter: {counter}</h1>

        <div className="buttons">
          <button onClick={increment}>+</button>
          <button onClick={decrement}>−</button>
        </div>
      </div>
    </div>
  );
}

export default App;
