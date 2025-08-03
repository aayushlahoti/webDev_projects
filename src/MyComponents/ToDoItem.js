import React from 'react'

export default function ToDoItem({todo, onRemove}) {
  return (
    <div>
      <h4>{todo.title }</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-danger btn-sm my-5" onClick={onRemove}>Remove</button>
    </div>
  )
}
