import React, { Component } from 'react'
import axios from 'axios'
import Registration from './Auth/Registration'
import LoginForm from './Auth/LoginForm'
import CategoryList from './Categories/CategoryList'
import { AppBar, Container, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import SupportWorkers from './User/SupportWorkers'

export default class Home extends Component {

    constructor(props) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
        //this.handleLogoutClick = this.handleLogoutClick.bind(this);
      }

      handleSuccessfulAuth(data) {
          this.props.handleLogin(data);
          this.props.history.push("/dashboard")
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
            <div className="splash-hero-containrr">
                {/* <CategoryList></CategoryList> */}
                <SupportWorkers/>
            </div>
        )
    }
}
