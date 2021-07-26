import React, { Component } from 'react'
import { connect } from "react-redux";
import { login } from "../../../redux/users/currentUser/currentUser";
import { updateLoginForm } from '../../../redux/users/loginForm/loginFormActions';
import { TextField, Container, Button, FormControl, FormGroup} from '@material-ui/core';
import { withRouter } from "react-router-dom";

class LoginForm extends Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        console.log(this.props.loginFormData)
    }

    handleSubmit = event => {
        event.preventDefault();
        login(this.props.loginFormData);
      };

    handleChange = e => {
       
        const { name, value } = e.target;
        const updatedFormInfo = {
          ...this.props.loginFormData,
          [name]: value
        };
        console.log(updatedFormInfo)
        updateLoginForm(updatedFormInfo);
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
                        value={loginFormData.email}
                        onChange={this.handleChange}
                        required/>
                    <br/>

                    <TextField
                        variant="outlined"
                        type="password"
                        name="password"
                        label="Password"
                        value={loginFormData.password}
                        onChange={this.handleChange}
                        required/>
                    <br/>

                    <Button type="submit" color="primary" variant="contained" style={{marginTop: '10px'}}>Login</Button>
                    </FormControl>
                    </FormGroup>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    // gives access to state from the store as props // getting what we need access to freom the store
    return {
      loginFormData: state.loginForm
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
      updateLoginForm: () => dispatch(updateLoginForm()),
      login: () => dispatch(login())
    }
  }

export default withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps// thunk allows redux to pass this function to dispatch
    )(LoginForm)
  );
  
