import React from 'react'
import { AppBar, Container, Button } from '@material-ui/core';
import SplashPage from './Categories/CategoryList'

const Dashboard = props => {
    return (
        <Container>
            <h1>Dashboard</h1>
            <h2>Status: {props.loggedInStatus}</h2>

            <h1>Your Bookings</h1>
<h2>Waiting on you to approve</h2>
<h2>Waiting on your support worker</h2>
<Button onClick={this.createTask}/>
        </Container>



    )
}

export default Dashboard;
