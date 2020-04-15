import { SEARCH_TODO } from '../Actions'

export default function searchTodo(state = '', action) {
    switch (action.type) {

        case SEARCH_TODO:
            return action.title

        default:
            return state
    }
}