import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';

class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: '',
            login: true
        }
    }

    componentDidMount() {
        try {
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
        catch(error) {
            console.log(error);
        };
    }

    render(){
        return(
            <div className="profile">
                <h2>Profile</h2>
                <h5>Username: {this.state.user}</h5>
            </div>
        )
    }
}

export default Profile