import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CenterContainer from "./containers/CenterContainer.js";
import LeftSidebar from "./containers/LeftSidebar.js";
import { Link } from "react-router-dom";
// import jwt_decode from 'jwt-decode';
import { h1 } from "calcite-react/Elements";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: false,
      user: ""
    };

    this.handleLogout = this.handleLogout.bind(this);
  }

  /*
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
  */

  handleLogout() {
    this.setState({
      login: false,
      user: ""
    });
    localStorage.clear();
    window.location.reload(false);
  }

  render() {
    return (
      <div className="app">
        <header>
          <Link className="headerLink" to="/">
            <h1>FireWild</h1>
          </Link>
        </header>
        <div className="leftSidebar">
          <LeftSidebar
            handleLogout={this.handleLogout}
            login={this.state.login}
            user={this.state.user}
          />
        </div>
        <div className="centerContainer">
          <CenterContainer login={this.state.login} user={this.state.user} />
        </div>
      </div>
    );
  }
}

export default App;
