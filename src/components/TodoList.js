import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {
  return props.todos.map((todo) => {
    return <Todo
      singleTodo={todo}
      setTodos={props.setTodos}
      todos={props.todos}
      todo={todo.text}
      key={todo.id}
    />
  })
}

export default TodoList
