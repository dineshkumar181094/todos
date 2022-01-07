import React from 'react'

export const RenderTodos = (props) => {
    return (
      <>
        <div className="card px-5 round-5">
          <div className="card-body">
            <h5 className="card-title fs-2">{props.todo.title}</h5>
            <p className="card-text fs-3">{props.todo.description}</p>
            <div className='row'>
            <button className="btn btn-primary mx-auto" onClick={() => props.deleteTodo(props.todo)}>Completed</button>
            <button className="btn btn-secondary mx-auto" onClick={() => props.deleteTodo(props.todo)}>Delete</button>
            </div>
          </div>
        </div>
        </>
    )
}
