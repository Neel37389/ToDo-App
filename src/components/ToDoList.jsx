import React from 'react'
import ToDoCard from './ToDoCard';

const ToDoList = ({todos, handleDeleteTodo, handleEditTodo}) => {
  return (
    <ul className="flex flex-col gap-4 overflow-y-auto pr-2">
        {todos.map((todo, todoIndex)=>{
            return(
                <ToDoCard handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} key={todoIndex} index={todoIndex}>
                    <p>{todo}</p>
                </ToDoCard>
            )
        })}
    </ul>

  )
}

export default ToDoList