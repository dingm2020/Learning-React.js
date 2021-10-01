import React from 'react'


export default function Todo({todo, toggleTodo}) {
    function handleTodoClick() {
         toggleTodo(todo.id )
    }
    return ( // printing all todos in the array from App.js
        <div>
            <label>
                <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />

                {todo.name}
            </label>
        </div>
    )
}
