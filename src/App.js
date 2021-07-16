import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Dashboard from './components/pages/Dashboard';
import { AppBar, Container, Button } from '@material-ui/core';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    }

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this)
  }

  checkLoginStatus() {
    axios.get("http://localhost:3001/api/v1/logged_in", { withCredentials: true })
    .then(response => {
      if (response.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN") {
        this.setState({
          loggedInStatus: "LOGGED_IN",
          user: response.data.user
        })
      } else if(!response.data.logged_in & this.state.loggedInStatus === "LOGGED_IN") {
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN",
          user: {}
        })
      }
    })
    .catch(error => {
      console.log("catch login error", error);
    });
  }


  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    })
  }

  handleLogout() {
    axios.delete("http://localhost:3001/api/v1/logout", {withCredentials: true})
    .then(response => {})
    .catch(error => {
      console.log("logout error", error)
    })
  this.setState({
    loggedInStatus: "NOT_LOGGED_IN",
    user: {}
  })
}



  render() {
    return (
      <>
        
          <AppBar position="static" color="primary">
          <Container fixed>
            {/* Router in here */}
           { this.state.loggedInStatus === "LOGGED_IN" ? <Button onClick={this.handleLogout}>Logout</Button>: <h1>Logged Out Nav Bar</h1>}
           </Container>
        </AppBar>
        <Container>
        <Router>
          <Switch>
            <Route
              exact path={"/"}
              render={props => (
                <Home {...props} 
                isLoggedIn={this.props.loggedInStatus}
                handleLogin={this.handleLogin}
                handleLogout={this.handleLogout}
                loggedInStatus={this.state.loggedInStatus} 
                />
              )} 
              />
            <Route path={"/dashboard"}
              render={props => (
                <Dashboard {...props} 
                loggedInStatus={this.state.loggedInStatus} />
              )}
            />
          </Switch>
        </Router>
      </Container>
      </>
    );
  }
}

export default App;
