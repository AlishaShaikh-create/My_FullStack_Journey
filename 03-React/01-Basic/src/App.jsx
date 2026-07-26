import StudentCard from "./StudentCard";

function App() {

const students = [
  { id: 1, name: "Rahul", course: "React" },
  { id: 2, name: "Priya", course: "Node.js" },
  { id: 3, name: "Aman", course: "MongoDB" },
];


   return(
    <>
     <StudentCard/>
    </>
   )
}

export default App
