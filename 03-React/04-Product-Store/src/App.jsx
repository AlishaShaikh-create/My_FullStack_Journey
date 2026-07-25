import { useState } from 'react'
import DisplayProducts from './Components/DisplayProducts'
import ProductCart from './Components/ProductCart'
import './App.css'


function App() {
  

  return (
   <>
  <div className="container">
  <h1 className="heading">Product Store</h1>
  <ProductCart />
</div>
   </>
  )
}

export default App
