import axios from 'axios';
import React, { Component } from 'react'

export default class Login extends Component {
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
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required>
                    </input>
                    <br/>

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required>
                    </input>
                    <br/>

                    <button type="submit">Login</button>
                </form>

            </div>
        )
    }
}
