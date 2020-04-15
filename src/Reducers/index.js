import { combineReducers } from 'redux'

import TodoReducer from './TodoReducer'
import SearchTodo from './SearchTodo'

export default combineReducers({
    TodoReducer,
    SearchTodo
})