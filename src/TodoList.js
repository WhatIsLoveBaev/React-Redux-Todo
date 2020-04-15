import React from 'react'

import ListContainer from './Containers/ListContainer'
import TaskInputContainer from './Containers/TaskInputContainer'
import Search from './Components/Search'
import HeaderContainer from './Containers/HeaderContainer'

import './Styles/App.css'

const TodoList = ({ store }) => {

    return (
      <main>
        <HeaderContainer store={store} />

        <Search />

        <TaskInputContainer store={store} />
        

        <ListContainer store={store} />
      </main>
    )
  }

export default TodoList;
