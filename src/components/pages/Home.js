import React, { Component } from 'react'
import axios from 'axios'
import Registration from '../auth/Registration/Registration'
import Login from '../auth/Login'
import { AppBar, Container, Button } from '@material-ui/core';

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
    }

    handleSuccessfulAuth(data) {
        // TODO update parent component
        this.props.handleLogin(data);
        //Redirect user to the dashboard
        this.props.history.push('/dashboard')
    }

    render() {
        return (
            <Container>
                {this.props.isLoggedIn === 'LOGGED_IN' ? <Button onClick={() => this.props.handleLogout()}>Logout</Button> : null}
                <Registration 
                handleSuccessfulAuth={this.handleSuccessfulAuth} />
                <Login 
                handleSuccessfulAuth={this.handleSuccessfulAuth}></Login>
            </Container>
        )
    }
}
