import React from 'react'
import { RenderTodos } from './renderTodo'

export const TodoItems = (props) => {
    return (
        <>
            {props.todos.map((todo) => {
                return <RenderTodos todo={todo} deleteTodo={props.deleteTodo}/>
            })
            }
        </>
    )
}
