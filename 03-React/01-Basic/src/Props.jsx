function Props() {
  const products = [
    { id: 1, name: "Laptop", price: 800 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Headphones", price: 100 },
  ];

  return (
    <>
      <button>{props.text}</button>


        <p>{props.employee_details.name}</p>
        <p>{props.employee_details.origin}</p>

        <ul >
            {
                props.colors.map((color)=>{
                    return <li key = {color}>{color}</li>
                })
            }
        </ul>
      <div>
            {children}
        </div>
    
    </>
  );
}
export default Props;
