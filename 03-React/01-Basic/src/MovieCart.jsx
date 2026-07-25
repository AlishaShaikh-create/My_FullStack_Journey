function MovieCart({title , rating , isHit, books}){
    return(
        <>
        <h1>{title}</h1>
        <p>rating :⭐⭐ {rating}</p>
        <h4>{isHit ? "Super Hit" : "Flop"}</h4>



        <h1>Books You can buy along with Movie Tickets </h1>
        <ul>
           {
             books.map((ele)=>{
                   return(
                    <li>{ele}</li>
                   )
            })
           }
        </ul>
        </>
    )
}
export default  MovieCart;