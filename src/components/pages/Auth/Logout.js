import React, { Component } from 'react'
import axios from 'axios';

export default class Logout extends Component {
    constructor(props) {
        super(props);

        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLogoutClick() {
        axios
        .delete("http://localhost:3001/logout", { withCredentials: true })
        .then(response => {
            this.props.handleLogout();
        })
        .catch(error => {
            console.log("logout error", error)
        })
    }

    render() {
        return (
            <div>
                <button onClick={() => this.handleLogoutClick()}>Logout</button>
            </div>
        )
    }
}
