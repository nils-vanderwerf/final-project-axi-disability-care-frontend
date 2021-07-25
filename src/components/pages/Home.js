import React, { Component, useState } from 'react'
import axios from 'axios'
import Registration from './auth/Registration/Registration'
import LoginForm from './auth/loginForm'
import CategoryList from './Categories/CategoryList'
import { AppBar, Container, Button, Grid, TextField } from '@material-ui/core';
import { Search, GpsFixed } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Carers from './User/CarersContainer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';


class Home extends Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = address => {
        this.setState({ address });
    };

    handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error));
    };


    render() {
        return (
            <Container>
                <CategoryList />
            </Container>
        )
    }
}

export default Home;
