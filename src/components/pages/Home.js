import React, { Component } from 'react'
import axios from 'axios'
import Registration from './Auth/Registration'
import LoginForm from './Auth/LoginForm'
import SplashPage from './splash_page/SplashPage'
import { AppBar, Container, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default class Home extends Component {

    constructor(props) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
        //this.handleLogoutClick = this.handleLogoutClick.bind(this);
      }

      handleSuccessfulAuth(data) {
          this.props.handleLogin(data);
          this.props.history.push("/dashboard")
      }

      handleLogoutClick() {
          axios
          .delete("http://localhost:3001/logout", { withCredentials: true })
          .then(response => {
              this.props.handleLogout();
          })
          .catch(error => {
              console.log("logout error", error)
          })
      }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <h1>Status: {this.props.isLoggedIn}</h1>
                {/* <button onClick={() => this.handleLogoutClick()}>Logout</button> */}
                <LoginForm handleSuccessfulAuth={this.handleSuccessfulAuth} />
            </div>
        )
    }
}
