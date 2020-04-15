import React from 'react'

const Todo = props => {

    const className = props.done ? 'task-done' : ''
    return (
        <div className='todo' >
            <p className={`todo-p ${className}`} onClick={() => props.doneTask(props.id)}>{props.title}</p>       
            <div className="remove-wrapper">
                <div className="btn-remove" onClick={() => props.deleteTask(props.id)}></div>
            </div>

        </div>
        )
}

export default Todo