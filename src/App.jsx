import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';
import { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState(() => {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
  });

  const [todoValue, setTodoValue] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleAddTodos(newTodo) {
    if (!newTodo.trim()) return;
    setTodos([...todos, newTodo]);
    setTodoValue("");
  }

  function handleDeleteTodo(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  function handleEditTodo(index) {
    setTodoValue(todos[index]);
    handleDeleteTodo(index);
  }

  return (
    <main>
      <ToDoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
      />

      <ToDoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
      />
    </main>
  );
}

export default App;
