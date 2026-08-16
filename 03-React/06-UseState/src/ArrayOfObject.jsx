import { useState } from "react";
function ArrayOfObjects() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Rahul",
      age: 25,
    },
    {
      id: 2,
      name: "Amit",
      age: 30,
    },
  ]);

  function adding_object() {
    setUsers((user) => [
      ...user,
      {
        id: 4,
        name: "Priya",
        age: 28,
      },
    ]);
  }

  function deleting_object() {
    setUsers((prev)=>(
        prev.filter((ele)=>ele.id !== 2)
    ))
  }

  function updating_object(){
    setUsers((prevUser)=>(
        prevUser.map((ele)=>(
            ele.id == 2 ? {
                ...ele,
                name : "Tohid"
            }:ele
        ))
    ))
  }
  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <p>{user.age}</p>
        </div>
      ))}
      <button onClick={adding_object}>add object</button>
      <button onClick={deleting_object}>deleting Object</button>
      <button onClick ={updating_object}>Updating object</button>
    </>
  );
}
export default ArrayOfObjects;
