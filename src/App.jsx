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
    <main className="min-h-screen flex items-center justify-center px-4 text-stone-800">
  <div className="w-full max-w-xl h-[80vh] bg-[#fbf8f2] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-7 border border-stone-200 flex flex-col">
    <ToDoInput
      todoValue={todoValue}
      setTodoValue={setTodoValue}
      handleAddTodos={handleAddTodos}
    />

    <div className="flex-1 overflow-hidden mt-6">
      <ToDoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
      />
    </div>
  </div>
</main>

  );
}

export default App;
