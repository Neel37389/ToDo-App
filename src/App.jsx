import ToDoInput from './components/ToDoInput.jsx'
import ToDoList from './components/ToDoList.jsx'
import { useState } from 'react';

function App() {

    const [todos, setTodos] = useState([ ]);


    function handleAddTodos(newTodo) {
      const newTodoList = [...todos, newTodo];
      setTodos(newTodoList);
    }

    function handleDeleteTodo(index) {
      const newTodoList = todos.filter((todo, todIndex) =>{
        return todIndex !== index;
      })
      setTodos(newTodoList);
    }

  return (
    <main>
      <ToDoInput handleAddTodos={handleAddTodos}/>
      <ToDoList handleDeleteTodo={handleDeleteTodo} todos={todos}/>   
    </main>
  )
}

export default App
