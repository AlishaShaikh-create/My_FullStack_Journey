import BooksCard from "./BooksCard"
function App() {

   const products = [
    { id: 1, name: "Laptop", price: 800 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Headphones", price: 100 },
  ];


   return(
    <>
     {
      products.map((product)=>{
         return <BooksCard key ={product.id} product ={product}/>
      })
     }
    </>
   )
}

export default App
