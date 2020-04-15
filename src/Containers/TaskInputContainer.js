import { connect } from 'react-redux'

import TaskInput from '../Components/TaskInput'

import { addTodo } from '../Actions'

function mapDispatchToProps(dispatch) {
    return {
        addTask: title => dispatch(addTodo(title))
    }
}

const TaskInputContainer = connect(null, mapDispatchToProps)(TaskInput)

export default TaskInputContainer