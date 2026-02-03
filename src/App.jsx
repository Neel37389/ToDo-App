import ToDoInput from './components/ToDoInput.jsx'
import ToDoList from './components/ToDoList.jsx'
import { useState } from 'react';

function App() {

    const [todos, setTodos] = useState([ ]);


    function handleAddTodos(newTodo) {
      const newTodoList = [...todos, newTodo];
      setTodos(newTodoList);
    }

  return (
    <main>
      <ToDoInput handleAddTodos={handleAddTodos}/>
      <ToDoList todos={todos}/>   
    </main>
  )
}

export default App
