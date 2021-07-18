import axios from 'axios';
import React, { Component } from 'react'
import { TextField, Container, Button } from '@material-ui/core';

export default class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            loginErrors: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        console.log("form submitted")
        event.preventDefault()
        axios.post('http://localhost:3001/api/v1/login', {
                user: {
                    email: this.state.email,
                    password: this.state.password
                }
            },
            { withCredentials: true }
        ).then(response => {
            if (response.data.status === 'created') {
                this.props.handleSuccessfulAuth(response.data);
            }
        })
        .catch(error => {
            console.log("registration error", error)
        })
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <TextField 
                        id="outlined-basic" 
                        label="Email" 
                        variant="outlined"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required/>
                    <br/>

                    <TextField
                        variant="outlined"
                        type="password"
                        name="password"
                        label="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required/>
                    <br/>

                    <Button type="submit" color="primary" variant="contained" style={{marginTop: '10px'}}>Login</Button>
                </form>
            </div>
        )
    }
}
