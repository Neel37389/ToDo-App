import ToDoInput from './components/ToDoInput.jsx'
import ToDoList from './components/ToDoList.jsx'

function App() {
    let todos = [
        "Sample ToDo 1",
        "Sample ToDo 2",
        "Sample ToDo 3"
    ];
  return (
    <main>
      <ToDoInput />
      <ToDoList todos={todos}/>   
    </main>
  )
}

export default App
