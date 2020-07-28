import React from 'react'

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length
    ?
    todos.map(todo =>
      <div key={todo.id} className="collection-item">
        <span onClick={() => deleteTodo(todo.id)}>{todo.content}</span>
      </div>
    )
    :
    <p className="center">You have no todo's left</p>

  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
}

export default Todos;