import React from 'react'

const ToDoInput = ({handleAddTodos, todoValue, setTodoValue}) => {
  return (
    <header className="flex gap-3 mb-6 border-b border-stone-300 pb-3">
      <input 
        className="flex-1 bg-transparent placeholder-stone-400 focus:outline-none text-lg tracking-wide"
        value={todoValue} 
        onChange={(e) => setTodoValue(e.target.value)}
        placeholder='Enter todo item...' 
      />
      <button
        className="px-4 py-1.5 text-sm rounded-md border border-stone-400 text-stone-700 hover:bg-stone-200 transition"
        onClick={() => {
        handleAddTodos(todoValue)
        setTodoValue("");
        }}>Add ToDo</button>
      </header>
  )
}

export default ToDoInput