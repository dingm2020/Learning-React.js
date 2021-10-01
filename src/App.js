import React, {useState, useRef, useEffect} from 'react'; // importing useState to update render realtime
import TodoList from './TodoList' // importing from TodoList.js file
import {v4 as uuidv4} from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([]) // object destructuring; todos = every element, setTodos == function to called to update Todos
  const todoNameRef = useRef()

  // load saved items onto website
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos)
      setTodos(storedTodos)
  }, []) // called only once, when [] is empty (initial)

  //saving todos in local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos]) // function is called when there are changes to [todos]
 

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos )
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos )
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value

    if(name === '') return
    //console.log(name)
    setTodos(prevTodos => {
      return [...prevTodos, {id:uuidv4(), name:name, complete:false}]
    })
    todoNameRef.current.value = null
  }

  // calling the default state to render
  // empty array bc to do list will always start empty
  return ( // can only return one element, make a fragment using <></> to return multiple elements
    // this is not traditonal HTML, is JSX
    <> 
    <TodoList todos={todos} toggleTodo={toggleTodo}  /> 
    <input ref ={todoNameRef} type='text'/>
    <button onClick={handleAddTodo}>Add Todo</button> 
    <button onClick={handleClearTodos }>Cleared Complete</button>
    <div>{todos.filter(todo => !todo.complete).length } left to do </div>
    </>
  )
}

export default App;
