// with plug-in, type rfc and autofills basic code
// HTML for all Todos will be here

import React from 'react'
import Todo from './Todo'

export default function TodoList({todos, toggleTodo}) {
    return (
        todos.map(todo => { // iterating the todo array from App.js
            return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
        })
    )
}
