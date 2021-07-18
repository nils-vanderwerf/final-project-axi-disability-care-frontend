import React, { Component } from 'react'
import { Button, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default class LoggedInNavBar extends Component {
    constructor(props) {
        super(props);
       
    }
    render() {
        return (
            <Container>
                <span>{this.props.userData.first_name}</span>
                Account
                <Button onClick={() => this.props.handleLogout()}>Logout</Button>
            </Container>
        )
    }
}
