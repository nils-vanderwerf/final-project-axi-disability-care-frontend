import React, { Component } from 'react'
import Home from '../pages/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginForm from '../pages/Auth/LoginForm'

export default class LoggedOutNavBar extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path='/'component={LoginForm}></Route> 
                    </Switch>
                </Router>
            </div>
        )
    }
}
