import React from 'react'
import TodoItem from './ToDoItem';

const Todos = (props) => {
  return (
    <div className="container">
      <h3 className=" my-4">Todos List</h3>
      {props.todos.length === 0
        ? "Add your daily chores above"
        : props.todos.map((todo) => (
          <TodoItem todo={todo} key={todo.sno} onRemove={() => props.onRemove(todo)} />
        ))
      }
    </div>
  )
}

export default Todos
