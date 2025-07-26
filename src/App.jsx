import { useCallback, useState, useRef, useEffect } from 'react'
import Todos from "./Todos.jsx";
import './App.css';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const count = useRef(0);


  useEffect(() => {
    count.current += 1;
    console.log(`Add component render count: ${count.current}`);
  })


  const addTodo = useCallback(() => {
      setTodos([todo, ...todos]);
      setTodo("");
  }, [todo, todos]);



  const handleSubmit = (e) => {
    e.preventDefault();

    if(todo.trim() === "") return;

    try{
      addTodo();
      
      setMessage("Task Added!");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
    catch(error){
      setMessage("Error Occurred");
      console.log(error);
      setShowToast(true);                                                                                           
      setTimeout(() =>  setShowToast(false), 3000);
    }
  } 

  return (
    <div className='App'>
      <h1 style={{textAlign:'center', color:'#242424'}}>React Todo-List</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <input 
            type='text'
            placeholder='+ Add a task'
            value={todo}
            onChange={(e) => setTodo(e.target.value)} 
          />

          <button id='addButton' type='submit'>Add</button>
        </p>

      </form>

      {showToast && <div className={`toast ${showToast ? 'show' : 'hide'}`}>{message}</div>}

      <div id="todos"><Todos todos={todos} /></div>

    </div>
  )
}

export default App;
