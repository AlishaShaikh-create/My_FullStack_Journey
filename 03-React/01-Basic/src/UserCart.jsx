function UserCart() {
   const notification = true
   return(
    <>
      {
        notification && <h1> You have a new message</h1>
      }
    </>
   )

 
}

export default UserCart;