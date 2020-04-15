import { connect } from 'react-redux'

import Header from '../Components/Header'

function mapStateToProps(state) {
    return {
        tasks: state.TodoReducer
    }
}

const HeaderContainer = connect(mapStateToProps)(Header)


export default HeaderContainer