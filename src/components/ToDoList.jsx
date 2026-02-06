import React from 'react'
import ToDoCard from './ToDoCard';

const ToDoList = (props) => {
    const {todos, handleDeleteTodo} = props;
  return (
    <ul className='main'>
        {todos.map((todo, todoIndex)=>{
            return(
                <ToDoCard handleDeleteTodo={handleDeleteTodo} key={todoIndex} index={todoIndex}>
                    <p>{todo}</p>
                </ToDoCard>
            )
        })}
    </ul>

  )
}

export default ToDoList