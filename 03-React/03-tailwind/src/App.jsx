import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './Components/Card'

function App() {
const users = [
  { id: 1, name: "Rahul" },
  { id: 2, name: "Priya" },
  { id: 3, name: "Amit" }
];

  return (
    <>
    {
      users.map((user)=>{
        <h1>{user.name}</h1>
      })
    }
    

    
</>
    
   
  )
}

export default App
