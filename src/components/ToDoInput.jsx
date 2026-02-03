import React from 'react'
import { useState } from 'react';

const ToDoInput = (props) => {
  const {handleAddTodos} = props;
  const [todoValue, setTodoValue] = useState("");
  return (
    <header>
      <input 
        value={todoValue} 
        onChange={(e) => setTodoValue(e.target.value)}
        placeholder='Enter todo item...' 
      />
      <button onClick={() => {
        handleAddTodos(todoValue)
        setTodoValue("");
        }}>Add ToDo</button>
      </header>
  )
}

export default ToDoInput