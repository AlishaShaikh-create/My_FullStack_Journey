import { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Learn React",
      completed: false
    },
    {
      id: 2,
      title: "Practice JavaScript",
      completed: false
    }
  ]);

  const [input, setInput] = useState("");

  // Add Todo
  function addTask() {
    if (input.trim() === "") {
      return;
    }

    const newTodo = {
      id: Date.now(),
      title: input,
      completed: false
    };

    setTodos(prevTodos => [
      ...prevTodos,
      newTodo
    ]);

    setInput("");
  }

  // Delete Todo
  function deleteTask(id) {
    setTodos(prevTodos =>
      prevTodos.filter(todo => todo.id !== id)
    );
  }

  // Mark Todo as completed
  function toggleTask(id) {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed
            }
          : todo
      )
    );
  }

  return (
    <>
      <h1>Todo List</h1>

      {/* Input */}
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder="Enter a task"
      />

      {/* Add button */}
      <button onClick={addTask}>
        Add Task
      </button>

      <hr />

      {/* Todo list */}
      {todos.map(todo => (
        <div key={todo.id}>

          <h3>{todo.title}</h3>

          <p>
            {todo.completed ? "Completed" : "Pending"}
          </p>

          <button onClick={() => toggleTask(todo.id)}>
            {todo.completed ? "Undo" : "Complete"}
          </button>

          <button onClick={() => deleteTask(todo.id)}>
            Delete
          </button>

        </div>
      ))}

      <hr />

      {/* Total tasks */}
      <h3>Total Tasks: {todos.length}</h3>
    </>
  );
}

export default Todo;