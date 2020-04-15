import { connect } from 'react-redux'

import List from '../Components/List'

import { deleteTodo, toggleTodo } from '../Actions'

function mapStateToProps(state) {
  return {
    tasks: state.TodoReducer.filter(todo => todo.title.toLowerCase().includes(state.SearchTodo))
  }
}

function mapDispatchToProps(dispatch) {
  return {
    doneTask: id => dispatch(toggleTodo(id)),
    deleteTask: id => dispatch(deleteTodo(id))
  }
}

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List) 

export default ListContainer