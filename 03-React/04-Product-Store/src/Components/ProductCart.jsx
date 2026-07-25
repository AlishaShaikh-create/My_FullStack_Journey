import products from "../data";
import DisplayProducts from "./DisplayProducts";

function ProductCart() {
  return (
    <>
      <div className="product-container">
        {products.map((pro) => {
          return <DisplayProducts obj={pro} />;
        })}
      </div>
    </>
  );
}

export default ProductCart;
