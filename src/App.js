import React, {Fragment, useState, useEffect} from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'


const App = () => {
  const [todos, setTodos] = useState([])

  useEffect(() =>{
    getTodos()
  }, [])

  useEffect(()=> {
    saveLocalTodos()
  }, [todos])



  const addTodosHandler = (todo) => {
    setTodos((prevTodos) => {
      return [todo, ...prevTodos]
    })
  }

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const getTodos = () => {
    if(localStorage.getItem === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let localTodo = JSON.parse(localStorage.getItem('todos'))
      setTodos(localTodo)
    }
  }

  return (
    <Fragment>
      <h1 className='header'>What's on the Agenda?</h1>
      <TodoForm onAdd={addTodosHandler}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </Fragment>
  )
}

export default App
