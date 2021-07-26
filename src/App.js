import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCarers } from './redux/users/fetchCarers/fetchCarersActions'
import { getCurrentUser, logoutCurrentUser } from './redux/users/currentUser/currentUserActions'

import Home from './components/pages/Home'
import Dashboard from './components/pages/Dashboard';
import { AppBar, Container, Button } from '@material-ui/core';
import { StyledButton, useStyles } from './styles/StyledButton';
import Registration from './components/pages/auth/Registration/Registration'
import LoginForm from './components/pages/auth/loginForm';
import Logout from './components/pages/auth/logout';
import SplashPage from './components/pages/Categories/CategoryList'
import NewTask from './components/Tasks/newTask';
import ConfirmTask from './components/Tasks/confirmTask';
import MyTasks from './components/Tasks/myTasks';
import UserAccount from './components/pages/User/Account';
import CarersContainer from './components/pages/User/CarersContainer'
import IndividualCarer from './components/pages/User/IndividualCarer'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      user: {},
    }

    this.handleLogin = this.handleLogin.bind(this);
    // this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
    // this.handleLogout = this.handleLogout.bind(this)

  }

  componentDidMount() {
    this.props.getCurrentUser()
    this.checkLoginStatus();
    console.log("Fetch carers response", this.props.userData)
  }


  handleLogin(data) {
   
  }

  checkLoginStatus() {
    axios.get("http://localhost:3001/api/v1/get_current_user", { withCredentials: true })
      .then(response => {
        if (response.data.logged_in && this.state.loggedIn) {
          this.setState({
            loggedIn: true,
            user: response.data.user
          })
        } else if (!response.data.logged_in & this.state.loggedIn) {
          this.setState({
            loggedIn: false,
            user: {}
          })
        }
      })
      .catch(error => {
        console.log("catch login error", error);
      });
  }


  render() {
    return (
      <>
        <div className="page-content">

          <Router>
            <AppBar position="static" color="primary">
              <Container>

                {
                  this.props.loggedIn === 'NOT_LOGGED_IN' ?
                    <Link to={{ pathname: '/login' }}>
                      <Button className="dark-theme">Login</Button>
                    </Link>
                    :
                    <Link to={{ pathname: '/logout' }}>
                      <Button className="dark-theme">Logout</Button>
                    </Link>

                }
              </Container>
            </AppBar>
            <Switch>
              <Route
                exact path={"/"}
                render={props => (
                  <Home
                    {...props}
                    // handleLogout={this.handleLogout}

                    handleLogin={this.handleLogin}
                    loggedIn={this.state.loggedIn}
                  />
                )} />

              <Route
                path={"/dashboard"}
                render={props => (
                  <Dashboard
                    {...props}
                    loggedIn={this.state.loggedIn}
                    user={this.state.user}
                  />
                )} />
              <Route path='/pick-category' component={SplashPage} />


              <Route path='/pick-support-worker' render={props => (
                <CarersContainer
                  {...props}
                  handleLogout={this.handleLogout}
                  loggedIn={this.state.loggedIn}
                />
              )} />

              <Route path='/sign-up' render={props => (
                  <Registration
                  {...props}
                  handleLogout={this.handleLogout}
                  loggedIn={this.state.loggedIn}
                /> 
              )}
              />
              <Route path='/new-task' render={props => (
                <NewTask
                  {...props}
                  handleLogout={this.handleLogout}
                  handleLogin={this.handleLogin}
                  loggedIn={this.state.loggedIn}
                />
              )} />
              <Route path='/carer/:id' render={match => <IndividualCarer match={match} />} />
              <Route path='/confirm-task' component={ConfirmTask} />
              <Route exact path='/my-tasks' component={MyTasks} />
              <Route exact path='/user-account' component={UserAccount} />
            </Switch>

            <Container />
          </Router>
        </div>
      </>
    );
  }
}


const mapStateToProps = state => {
  return {
    carerData: state.carer,
    userData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCarers: () => dispatch(fetchCarers()),
    getCurrentUser: (user) => dispatch(getCurrentUser(user)),
    logoutCurrentUser: () => dispatch(logoutCurrentUser()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
