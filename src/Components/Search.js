import React from 'react'
import { connect } from 'react-redux'

import { searchTodo } from '../Actions'


class Search extends React.Component {
    
    findTodo = () => {
        this.props.onSearchTodo(this.inputValue.value)
    }

    render() {
        return (
            <div className="search-wrapper">
                <input 
                type="text" 
                className="input-search" 
                placeholder="Search.." 
                onChange={this.findTodo}
                ref={ref => this.inputValue = ref}
                />
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSearchTodo: title => dispatch(searchTodo(title))
    }
}

export default connect(null, mapDispatchToProps)(Search)