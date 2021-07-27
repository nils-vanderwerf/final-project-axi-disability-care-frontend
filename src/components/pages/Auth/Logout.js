import React, { Component } from 'react'
import axios from 'axios';
import {logout} from '../../../redux/actions/session_actions' 

export default class Logout extends Component {
    constructor(props) {
        super(props);

        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLogoutClick() {
        axios
        .delete("http://localhost:3001/logout", { withCredentials: true })
        .then(response => {
            console.log("Logout success", response.data)
            this.props.logout()
            this.props.history.push("/", response.data)
        })
        .catch(error => {
            console.log("logout error", error)
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleLogoutClick}>Logout</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
      logout: () => dispatch(logout(null))
    }
  }

export default withRouter(
    connect(
      null,
      mapDispatchToProps// thunk allows redux to pass this function to dispatch
    )(LoginForm)
  );


