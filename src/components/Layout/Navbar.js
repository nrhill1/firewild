import React, { Component } from 'react'
import { Switch, Link } from 'react-router-dom'

class Navbar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          login: this.props.login,
          user: this.props.user
        }
      }

    render(){
        return(
            <div className="navbar">
                <nav>
                    <ul>
                        <li><Link className="navLink" to="/">Active FireMap </Link></li>
                        <li><Link className="navLink" to="/user">Profile</Link></li>
                        <li><Link className="navLink" to="/login">Login</Link></li>
                        <li><Link className="navLink" to="/register">Register</Link></li>
                        <li><Link className="navLink" to="/report">Create Report</Link></li>
                        <li><Link className="navLink" to="/feed">Report Feed</Link></li>
                        <li><Link className="navLink" onClick={this.props.handleLogout}>Logout</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar;