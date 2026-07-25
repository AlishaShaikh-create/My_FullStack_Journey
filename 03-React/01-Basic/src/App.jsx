import UserCart from "./UserCart"
import MovieCart from "./MovieCart"
function App() {
[
  {
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "price": 14.99,
    "tags": ["classic", "fiction", "historical", "coming-of-age"]
  },
  {
    "title": "1984",
    "author": "George Orwell",
    "price": 12.49,
    "tags": ["dystopian", "fiction", "political", "classic"]
  },
  {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "price": 10.99,
    "tags": ["classic", "fiction", "american", "novel"]
  },
  {
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "price": 11.99,
    "tags": ["romance", "classic", "fiction", "literature"]
  },
  {
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "price": 16.99,
    "tags": ["fantasy", "adventure", "fiction", "classic"]
  }
]
   return(
    <>
    <UserCart 
    name ="Alisha"
    age ={23}
    city="Hyderabad"/>


    <MovieCart
    title ="One Piece"
    rating ={5}
    isHit={true}
    />

    


    </>
   )
}

export default App
