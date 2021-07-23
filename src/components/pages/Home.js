import React, { Component } from 'react'
import axios from 'axios'
import Registration from './auth/Registration/Registration'
import LoginForm from './auth/loginForm'
import CategoryList from './Categories/CategoryList'
import { AppBar, Container, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Carers from './User/CarersContainer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default class Home extends Component {

    constructor(props) {
        super(props);
        // this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
        this.createTask = this.createTask.bind(this)
    }

    handleSuccessfulAuth(data) {
        this.props.history.push('/dashboard')
    }

    createTask() {

    }

    render() {
        return (
            <div className="login-hero-container">
                <CategoryList/>
            </div>
        )
    }
}
