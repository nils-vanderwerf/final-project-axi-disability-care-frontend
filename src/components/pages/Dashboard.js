import React from 'react'
import { AppBar, Container, Button } from '@material-ui/core';

const Dashboard = props => {
    return (
        <Container>
            <h1>Dashboard</h1>
            <h2>Status: {props.loggedInStatus}</h2>
            
        </Container>
    )
}

export default Dashboard;
