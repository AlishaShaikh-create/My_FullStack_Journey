function Basic(){
    const name = "Alisha"
    let city = "Hyderabad"
    let age = 10;
    let isLoggedIn = true
    return(
        <>
        <p>{name}</p>
        <p>{city}</p>
        <h1>{10 + 20}</h1>
        <p>{
            isLoggedIn ? "You are logged in" : "Please login"
            }
        </p>
        </>
    )
}
export default Basic