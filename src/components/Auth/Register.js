import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import { Form, Alert } from 'react-bootstrap'


const API_URL = 'http://127.0.0.1:5000/'

class Register extends Component {

    state = {
        username: '', 
        password: '',
        password2: '',
        error: null,
        showAlert: false
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };
    
    handleSubmit = (event) => {
        if (this.state.password && this.state.password2 && this.state.password === this.state.password2) {
            event.preventDefault();
            console.log('Register Submit - ', this.state);
            let requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.state)
            };
            fetch(`${API_URL}auth/register`, requestOptions)
                .then(res => this.props.history.push('/login'))
                .catch(err => {
                    console.log(err);
                    this.setState({ error: err });
            });
        }
        if (this.state.password !== this.state.password2) {
            event.preventDefault();
            console.log("Pass unmatch")
            this.setState({showAlert: true})
        }
    };

    render() {
        return(
            <div className="registerForm">
                <Form onSubmit={this.handleSubmit}>
                    <h2>Register</h2>
                    <Form.Control 
                        type="username" 
                        id="username" 
                        name="username" 
                        value={this.state.username} 
                        onChange={this.handleChange} 
                        className="formcontrol" 
                        placeholder="Enter your new username"
                        style= {{ marginTop: "10px" }}
                    />
                    <Form.Control 
                        type="password" 
                        id="password" 
                        name="password" 
                        value={this.state.password} 
                        onChange={this.handleChange} 
                        className="formcontrol"
                        placeholder="Password"
                        style= {{ marginTop: "10px" }}
                    />
                    <Form.Control 
                        type="password" 
                        id="password2" 
                        name="password2" 
                        value={this.state.password2} 
                        onChange={this.handleChange} 
                        className="formcontrol"
                        placeholder="Confirm"
                        style= {{ marginTop: "10px" }}
                    />
                    <Button variant="outline-light" className="submitButton" type="submit" style= {{ marginTop: "10px" }}>Submit</Button>  
                </Form>
                {this.state.showAlert ?                 
                <Alert variant="danger" style={{maxWidth: "200px", margin: "0 auto", marginTop: "40px"}}>
                    Passwords do not match...
                </Alert> : <span></span>
                }     
            </div>
        )
    }
}

export default Register;