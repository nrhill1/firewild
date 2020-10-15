import React, { Component } from 'react'
import FireMap from '../components/Map/FireMap.js'
import Profile from '../components/Profile/Profile.js'
import Login from '../components/Auth/Login.js'
import Register from '../components/Auth/Register.js'
import ReportForm from '../components/Reports/ReportForm.js'
import ReportFeed from '../components/Reports/ReportFeed'
import { Switch, Route } from 'react-router-dom'


class CenterContainer extends Component {
    constructor(props){
        super(props)

        this.state= {
            container: true
        }
    }

    render() {
        return(
            <Switch>
                <Route exact path="/" component={FireMap} />
                <Route exact path="/user" component={Profile} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/report" component={ReportForm} />
                <Route exact path="/feed" component={ReportFeed} />
             </Switch>
        )
    }
}

export default CenterContainer;