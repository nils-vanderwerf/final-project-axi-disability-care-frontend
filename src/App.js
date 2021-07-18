import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Dashboard from './components/pages/Dashboard';
import { AppBar, Container, Button } from '@material-ui/core';
import Registration from './components/pages/Auth/Registration';
import LoggedInNavBar from './components/Nav/loggedInNavBar';
import LoggedOutNavBar from './components/Nav/loggedOutNavBar';
import LoginForm from './components/pages/Auth/LoginForm';
import Logout from './components/pages/Auth/Logout';
import SplashPage from './components/pages/splash_page/SplashPage'
import NewTask from './components/Tasks/NewTask';
import ConfirmTask from './components/Tasks/ConfirmTask';
import MyTasks from './components/Tasks/MyTasks';
import UserAccount from './components/pages/User/Account';


export default class App extends Component {
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
       <div className="page-content">
          <Container />
          <Router>
            <Switch>
                <Route 
                exact path={"/"} 
                render={props => (
                  <Home 
                    {...props} 
                    // handleLogout={this.handleLogout}
                    handleLogin={this.handleLogin}
                    isLoggedIn={this.state.loggedInStatus} 
                    />
                )} />
              <Route 
                exact path={"/logout"} 
                render={props => (
                  <Logout 
                    {...props} 
                    handleLogout={this.handleLogout}
                    loggedInStatus={this.state.loggedInStatus} 
                    />
                )} />
              <Route 
                exact path={"/dashboard"} 
                render={props => (
                  <Dashboard 
                    {...props} 
                    loggedInStatus={this.state.loggedInStatus}
                    user={this.state.user}
                    />
                )} />
              <Route exact path='/pick-category' component={SplashPage} />
              <Route exact path='/new-task' component={NewTask} />
              <Route exact path='/confirm-task' component={ConfirmTask}/>
              <Route exact path='/my-tasks' component={MyTasks} />
              <Route exact path='/user-account' component={UserAccount} />

            </Switch>
          </Router>
          <Container />
        </div>
      </>
    );
  }
}