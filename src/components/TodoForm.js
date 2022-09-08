import React, { useState } from 'react'

const TodoForm = (props) => {
  const [input, setInput] = useState('')

  const addTodoHandler = (e) => {
    setInput(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()

    if(input.trim() === '') {
      return
    }

    props.onAdd({
      text: input,
      completed: false,
      id: Math.floor(Math.random() * 1000),
    })

    setInput('')
  }

  return (
    <div className = 'todo-form' >
    <form onSubmit={submitHandler}>
      <input className = 'todo-input' type='text' onChange={addTodoHandler} value={input} />
      <button className='todo-button'>Add Todo</button>
    </form>
    </div>
  )
}

export default TodoForm
