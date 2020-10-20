import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'

class Navigbar extends Component {

    constructor(props) {
        super(props)
        this.state = {
          login: this.props.login,
          user: this.props.user
        }
    }

    render() {
        return(
            <Navbar bg="black" className="navbar">
                <ul>
                    <li><Nav.Link className="navLink" href="/">FireMap</Nav.Link></li>
                    <li><Nav.Link className="navLink" href="/user">Profile</Nav.Link></li>
                    <li><Nav.Link className="navLink" href="/login">Login</Nav.Link></li>
                    <li><Nav.Link className="navLink" href="/register">Register</Nav.Link></li>
                    <li><Nav.Link className="navLink" href="/report">Create Report</Nav.Link></li>
                    <li><Nav.Link className="navLink" href="/feed">Report Feed</Nav.Link></li>
                    <li><Nav.Link className="navLink" onClick={this.props.handleLogout}>Logout</Nav.Link></li>
                </ul>
            </Navbar>
        )
    }
}

export default Navigbar;