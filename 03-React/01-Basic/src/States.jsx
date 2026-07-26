function States(){
  // with this code nothing happen to the state 
    let count = 0
    const increment =()=>{
        count +=1 
        console.log(count)
    }
    return(
        <>
        <h1>{count}</h1>
        <button onClick={increment}>Increment +</button>
        
        </>
    )
}
export default States