import ToDoInput from './components/ToDoInput.jsx'
import ToDoList from './components/ToDoList.jsx'
import { useState } from 'react';

function App() {

    const [todos, setTodos] = useState([ ]);
    const [todoValue, setTodoValue] = useState("");


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

    function handleEditTodo(index) {
      const valueToBeEdited = todos[index];
      setTodoValue(valueToBeEdited);
      handleDeleteTodo(index);
    }

  return (
    <main>
      <ToDoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      <ToDoList  handleEditTodo={handleEditTodo} todoValue={todoValue} handleDeleteTodo={handleDeleteTodo} todos={todos}/>   
    </main>
  )
}

export default App
