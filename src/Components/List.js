import React from 'react'

import Todo from './Todo'

const List = props => {

  const activeTasks = props.tasks.filter(task => !task.done)
  const doneTasks = props.tasks.filter(task => task.done)
  
    return (

      <div>
        {[...activeTasks, ...doneTasks].map(task => 
          <Todo 
            key={task.id}
            id={task.id}
            title={task.title}
            done={task.done}
            deleteTask={props.deleteTask}
            doneTask={props.doneTask}
          />
        )}
      </div>
      )   
  }

export default List;
