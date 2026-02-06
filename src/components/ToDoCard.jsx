import React from 'react'

const ToDoCard = (props) => {
    console.log("TdoCard props", props);
    const {children, handleDeleteTodo, index} = props;
  return (
    <li className='todoItem'>
        {children}
        <div className='actionContainer'>
            <button>
                <i className="fa-regular fa-pen-to-square"></i>
            </button>
            <button onClick={() =>{
                handleDeleteTodo(index)
            }}>
                <i className="fa-solid fa-trash"></i>
            </button>
        </div>
        </li>
  )
}
export default ToDoCard