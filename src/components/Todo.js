import React from 'react'
import { FaTrash, FaCheck } from 'react-icons/fa';
import '../index.css'

const Todo = (props) => {
  const deleteHandler = () => {
    props.setTodos(
      props.todos.filter((el) => {
        return el.id !== props.singleTodo.id
      })
    )
  }

  const completedHandler = () => {
      props.setTodos(props.todos.map(todo => {
          if(todo.id === props.singleTodo.id) {
              return {...todo, completed: !todo.completed}
          }
          return todo
      }))
  }

  return (
    <div className='todo-item'>
      <li className={`${props.singleTodo.completed ? 'completed': ''} todo-li` }>{props.todo} </li>
      <div className ='btns'>
      <button className = 'delete-btn btn'onClick={deleteHandler}><FaTrash/></button>
      <button className= 'complete-btn btn' onClick={completedHandler}><FaCheck/></button>
      </div>
    </div>
  )
}

export default Todo
