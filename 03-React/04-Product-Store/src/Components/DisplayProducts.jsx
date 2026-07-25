import ProductCart from "./ProductCart";

function DisplayProducts({obj}){
    return(
        <>
        <div className="product-card">
            <h1>{obj.name}</h1>
        <h3>{obj.price}</h3>
        <p className={obj.stock > 0 ? "in-stock" : "out-stock"}>
  {obj.stock > 0 ? `In Stock: ${obj.stock}` : "Out of Stock"}
</p>
        </div>
        
        
        </>
    )
}
export default DisplayProducts