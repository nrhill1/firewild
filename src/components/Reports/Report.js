import React, { Component } from 'react'
import jwt_decode from 'jwt-decode';
import Button from 'react-bootstrap/Button'
import Axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/'

class Report extends Component {
    constructor(props) {
        super(props)

        this.state = {
            login: false,
            user: ''
        }
    }

    componentDidMount() {
        if (localStorage.token) {
          const token = localStorage.token
          const decoded = jwt_decode(token)
          this.setState({
            login: true,
            user: decoded.identity.username
          })
          console.log(decoded)
          console.log(decoded.identity)
          console.log(decoded.identity.username)
        }
    }

    deleteReport = (event) => {
        event.preventDefault();
        Axios.delete(`${API_URL}reports/delete/${this.props.reportid}`)
            .then(res => {this.props.history.push('/feed')})
            .catch(err => {
                console.log(err);
            })
            .then(window.location.reload(false))
    }

    render() {
        return(
            <div className="Report">
                    <h5 className="username"><b>By:</b> {this.props.username}</h5>
                    <p className="text">{this.props.text}</p>
                    <span className="location"><b>Location:</b> {this.props.location}</span>
                    {(this.state.user === this.props.username) 
                        ? <Button variant="outline-danger" onClick={this.deleteReport}>Delete</Button> 
                        : <span></span> }
                <hr />
            </div>
        )
    }
}

export default Report