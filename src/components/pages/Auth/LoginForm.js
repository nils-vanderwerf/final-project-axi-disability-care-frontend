import React, { Component } from 'react'
import { connect } from "react-redux";
import axios from 'axios';
import { TextField, Container, Button, FormControl, FormGroup} from '@material-ui/core';
import { withRouter } from "react-router-dom";
import {getCurrentUser} from '../../../redux/actions/session_actions'

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
          email: "",
          password: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = event => {
      event.preventDefault()
      const {email, password} = this.state;
      console.log("submit clicked")

      axios.post('http://localhost:3001/api/v1/login', 
      {
        user: {
          email: email,
          password: password
        }
      } 
      )
      .then(response => {
        console.log("Login success", response.data)
        this.props.getCurrentUser(response.data)
        this.props.history.push("/dashboard", response.data)
      })
      .catch(error => {
        console.log("registration error", error)
      })
      };

    handleChange = event => {
       this.setState({
         [event.target.name]: event.target.value
       })
      };

    render() {
        const {loginFormData, updateLoginForm} = this.props
        return (
            <div className="login-container">
                <h1 id="main-title">Oasis Disability Care</h1>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <FormControl>
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

                    <Button type="submit" color="primary" variant="contained" 
                    onClick={this.handleSubmit} 
                    style={{marginTop: '10px'}}>Login</Button>
                    </FormControl>
                    </FormGroup>
                </form>
            </div>
        )
    }
}


  const mapDispatchToProps = dispatch => {
    return {
      getCurrentUser: (user) => dispatch(getCurrentUser(user))
    }
  }

export default withRouter(
    connect(
      null,
      mapDispatchToProps// thunk allows redux to pass this function to dispatch
    )(LoginForm)
  );

