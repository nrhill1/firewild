import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import { Form } from 'react-bootstrap'

const API_URL = 'http://127.0.0.1:5000/'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state= {
            username: '',
            password: ''
        }
    }

    loginUser = (userObj) => ({
        type: 'LOGIN_USER',
        payload: userObj
    })

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        });
      };
    
    
    handleLogin = (event) => {
    	event.preventDefault();
        console.log("Login")
    	const user = this.state;
  
		fetch(`${API_URL}users/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(user)
		})
			.then(res => res.json())
			.then(data => {
                console.log("Success", data);
                // TODO: un comment when profile functionality is done.
                localStorage.setItem("token", data.token)
                console.log(localStorage)
                this.props.history.push('/user')
            })
      .catch(err => {
        this.setState({ error: err })
      })
    };

    render() {
        return(
            <div className="loginForm">
                <h2>Login</h2>
                <Form onSubmit={this.handleLogin}>
                    <Form.Control
                        type='text'
                        name="username" 
                        placeholder='Username'
                        onChange={this.handleChange} 
                        style = {{
                            display: "inline-block",
                            maxWidth: "250px"
                        }}
                    />
                    <Form.Control
                        type='password'
                        name="password" 
                        placeholder='Password'
                        onChange={this.handleChange}
                        style = {{
                            display: "inline-block",
                            maxWidth: "250px",
                            marginLeft: "10px"
                        }}
                    />
                <Button variant="outline-light" type="submit" style = {{ display: "block", margin: "0 auto", marginTop: "10px" }}>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default Login;