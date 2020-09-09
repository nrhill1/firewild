import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button'


const API_URL = 'http://127.0.0.1:5000/'

class Register extends Component {

    state = {
        username: '', 
        password: '',
        password2: '',
        error: null
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };
    
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Register Submit - ', this.state);
        const newUser = this.state;
        console.log(newUser);
        axios.post(`${API_URL}auth/register`, newUser)
            .then(res => this.props.history.push('/login'))
            .catch(err => {
                console.log(err);
                this.setState({ error: err });
        });
    };

    render() {
        return(
            <div className="registerForm">
                <form onSubmit={this.handleSubmit}>
                    <h2>Register</h2>
                    <input 
                        type="username" 
                        id="username" 
                        name="username" 
                        value={this.state.username} 
                        onChange={this.handleChange} 
                        className="form-control form-control-lg" 
                        placeholder="Enter your new username"
                    />
                    <input
                        type="password" 
                        id="password" 
                        name="password" 
                        value={this.state.password} 
                        onChange={this.handleChange} 
                        className="form-control form-control-lg"
                        placeholder="Password"
                    />
                    <input
                        type="password" 
                        id="password2" 
                        name="password2" 
                        value={this.state.password2} 
                        onChange={this.handleChange} 
                        className="form-control form-control-lg"
                        placeholder="Confirm"
                    />
                    <Button variant="outline-light" type="submit">Submit</Button>  
                </form>
                         
            </div>
        )
    }
}

export default Register;