import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar'


class LeftSidebar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: this.props.user,
            login: this.props.login
        }
    }


    render() {
        return(
            <div>
                <Navbar
                handleLogout = {this.props.handleLogout}
                user = {this.state.user}
                login = {this.state.login} />
            </div>
        )
    }
}

export default LeftSidebar;