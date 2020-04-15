import React from 'react';

class TaskInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title : ''
        }

        this.store = this.props.store
    }

    handleBtn = () => {
        const title = this.state.title

        if (title) {
            this.props.addTask(title)
            this.setState({ title: ''})
        }
    }
    inputChange = (event) => {
        this.setState({title: event.target.value});
    }
    handleEnter = (event) => {
        if (event.key === 'Enter') this.handleBtn();
    }
    
    render() {
        return (
            <div className="task-input">
                <div className="input-wrapper">
                    <input className="todo-input" onKeyPress={this.handleEnter} onChange={this.inputChange} value={this.state.title} type="text" />
                </div>
               <button className='btn-add' onClick={this.handleBtn}>Add</button>
            </div>  
        ); 
    }
}

export default TaskInput;