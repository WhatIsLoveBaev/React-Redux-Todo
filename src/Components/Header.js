import React from 'react'

const Header = ({tasks}) => {

    const activeTasks = tasks.filter(task => !task.done).length

    return (
        <div className='App'>
            <div className="logo">
                <div className="logo__circle"></div>
            </div>
            <h1 className="active-tasks">Active tasks: {activeTasks}</h1>
        </div>
    )
}

export default Header