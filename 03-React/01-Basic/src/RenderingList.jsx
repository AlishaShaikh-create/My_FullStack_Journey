function RenderingList(){
     const products = [
    { id: 1, name: "Laptop", price: 800 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Headphones", price: 100 },
  ];
    return(
        <>
        <div>{
            products.map((ele)=>{
                return <div key = {ele.id}>
                    <h1>{ele.name}</h1>
                    <p>{ele.price}</p>     
                    </div>
            })
            }</div>
        </>
    )
}
export default RenderingList