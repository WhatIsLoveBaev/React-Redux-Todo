import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../Actions'

function todoReducer(state = {}, action) {
    switch (action.type) {

        case ADD_TODO:

            return {
                id: action.id,
                title: action.title,
                done: false
            }

        case TOGGLE_TODO:

            if (state.id === action.id) {
                return {...state, done: !state.done}
            } else { return state}


        default:
            return state
    }
}

export default function reducer(state = [], action) {
    switch (action.type) {

        case ADD_TODO:

            return [...state, todoReducer(undefined, action)]

        case DELETE_TODO:

            const idx = state.findIndex(todo => todo.id === action.id)
            
            return [
                ...state.slice(0, idx),
                ...state.slice(idx + 1)
            ];

        case TOGGLE_TODO:
            
            return state.map(todo => todoReducer(todo, action))

        default:
            return state
    }
}