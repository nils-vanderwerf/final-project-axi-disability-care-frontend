import React from 'react'
import { AppBar, Container, Button } from '@material-ui/core';
import SplashPage from './Categories/CategoryList'
import { connect } from 'react-redux'



const Dashboard = props => {
    return (
        <Container>
            <h1>Dashboard</h1>
            <h2>Status: {props.userData.user ? `LOGGED IN` : "NOT LOGGED IN"}</h2>

            <h1>Your Bookings</h1>
            <h2>Waiting on you to approve</h2>
            <h2>Waiting on your support worker</h2>
            {/* <Button onClick={this.createTask}/> */}
        </Container>



    )
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

export default connect(
    mapStateToProps,
    null
)(Dashboard)