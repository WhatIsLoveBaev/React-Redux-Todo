export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SEARCH_TODO = 'SEARCH_TODO'

let nextId = Date.now()

export function addTodo(title) {
    return {
        type: ADD_TODO,
        id: nextId++,
        title
    }
}
export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        id
    }
}
export function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id
    }
}
export function searchTodo(title) {
    return {
        type: SEARCH_TODO,
        title
    }
}
