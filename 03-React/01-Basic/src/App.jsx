import Basic from "./Basic";

import Props from "./Props";

import RenderingList from "./RenderingList";

import ConditionalRendering from "./ConditionalRendering";

import Counter from "./Counter";
import UpdatingObjects from "./UpdatingObjects";
import UpdatingArrays from "./UpdatingArrays";

function App() {
  let employee = {
        name : "Alisha",
        company_name : "dan_musa",
        origin : 1980
    }
  let colors = ["red" , "green","blue"]  
  return(
  <>
  <UpdatingArrays/>
  </>
  )   
   
}

export default App
