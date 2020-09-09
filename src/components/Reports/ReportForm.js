import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/'

class ReportForm extends Component {

    state = {
        login: false,
        text: "",
        location: "",
        username: ""
    }

    componentDidMount() {
        if (localStorage.token) {
          const token = localStorage.token
          const decoded = jwt_decode(token)
          this.setState({
            login: true,
            username: decoded.identity.username
          })
          console.log(decoded)
          console.log(decoded.identity)
          console.log(decoded.identity.username)
        }
      }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };
    

    handleReport = (event) => {
        event.preventDefault();
        let newReport = this.state;
        console.log(newReport);
        axios.post(`${API_URL}addreport`, newReport)
            .then(res => this.props.history.push('/feed'))
            .catch(err => {
                console.log(err);
        });
    }

    render() {
        return(
            <div className="reportForm">
                <Form onSubmit={this.handleReport}>
                    <h2>Create a Wildfire Report</h2>
                    <textarea
                        type="text"
                        name="text"
                        onChange={this.handleChange}
                        value={this.state.text}
                        placeholder="What's happening?"
                    />
                    <input
                        type="text"
                        name="location"
                        value={this.state.location}
                        onChange={this.handleChange}
                        placeholder="Where are you?"
                    /> 
                <Button variant="outline-light" className="submitButton" type="submit">Submit</Button>{' '}
                </Form>
            </div>
        )
    }
}

export default ReportForm