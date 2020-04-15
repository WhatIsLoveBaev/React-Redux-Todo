import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import reducer from './Reducers'

import TodoList from './TodoList'

function loadFromLocal() {
    try {
        const getLocal = localStorage.getItem('TodoList')
        if (getLocal) {
            return JSON.parse(getLocal)
        }
    } catch(e) {
        console.log(e)
    }
}
const localState = loadFromLocal()


const store = createStore(reducer, localState, applyMiddleware(thunk))


function saveToLocal(state) {
    try {
        const local = JSON.stringify(state)
        localStorage.setItem('TodoList', local)
    } catch(e) {
        console.log(e)
    }
}

store.subscribe(() => saveToLocal(store.getState()))


ReactDOM.render(
    <Provider store={store} >
        <TodoList />
    </Provider>
, document.getElementById('root'));
