import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Badge } from '@material-ui/core'

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
                    <li><Badge color="error" overlap="circle" badgeContent="0"><Nav.Link className="navLink" href="/">FireMap</Nav.Link></Badge></li>
                    { localStorage.token ? <li><Nav.Link className="navLink" href="/user">Profile</Nav.Link></li> : ""}
                    <li><Nav.Link className="navLink" href="/login">Login</Nav.Link></li>
                    <li><Nav.Link className="navLink" href="/register">Register</Nav.Link></li>
                    { localStorage.token ? <li><Nav.Link className="navLink" href="/report">Create Report</Nav.Link></li>: ""}
                    <li><Badge color="error" badgeContent="0"><Nav.Link className="navLinkk" href="/feed">Report Feed</Nav.Link></Badge></li>
                    { localStorage.token ? <li><Nav.Link className="navLink" onClick={this.props.handleLogout}>Logout</Nav.Link></li>: ""}
                </ul>
            </Navbar>
        )
    }
}

export default Navigbar;