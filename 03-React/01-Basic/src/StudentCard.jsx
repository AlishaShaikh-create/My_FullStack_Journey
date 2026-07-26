import React from 'react'

const StudentCard = () => {
    const students = [
  { id: 1, name: "Rahul", course: "React" },
  { id: 2, name: "Priya", course: "Node.js" },
  { id: 3, name: "Aman", course: "MongoDB" },
];

  return (
    <>
    {
        students.map((ele)=>(
             <div key={ele.id}>
                <h1>{ele.name} - {ele.course}</h1>
             </div>
        ))
    }
    </>
  )
}

export default StudentCard