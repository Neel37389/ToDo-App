import React from 'react'

const ToDoCard = ({children, handleDeleteTodo, index, handleEditTodo}) => {
  return (
    <li className="group bg-white/80 backdrop-blur-sm px-4 py-3 rounded-lg border border-stone-200 shadow-sm hover:shadow transition flex justify-between items-center">
        {children}
        <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition">
            <button className="text-stone-400 hover:text-stone-700" onClick={() =>{
                handleEditTodo(index)
            }}>
                <i className="fa-regular fa-pen-to-square"></i>
            </button>
            <button className="text-stone-400 hover:text-red-500" onClick={() =>{
                handleDeleteTodo(index)
            }}>
                <i className="fa-solid fa-trash"></i>
            </button>
        </div>
        </li>
  )
}
export default ToDoCard