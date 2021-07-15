import React, { Component } from 'react'
import Registration from '../auth/Registration'
import Login from '../auth/Login'

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
            <div>
                <h1>Home</h1>
                <h2>Status: {this.props.loggedInStatus}</h2>
                <Registration handleSuccessfulAuth={this.handleSuccessfulAuth}/>
                <Login handleSuccessfulAuth = {this.handleSuccessfulAuth}></Login>
            </div>
        )
    }
}
