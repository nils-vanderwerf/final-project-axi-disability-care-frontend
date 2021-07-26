import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCarers } from './redux/users/fetchCarers/fetchCarersActions'
import { getCurrentUser, logout } from './redux/users/currentUser/currentUserActions'

import NavBar from './components/NavBar'
import Home from './components/pages/Home'
import Dashboard from './components/pages/Dashboard';
import {Container } from '@material-ui/core';
import { StyledButton, useStyles } from './styles/StyledButton';
import Registration from './components/pages/auth/Registration/Registration'
import SplashPage from './components/pages/Categories/CategoryList'
import NewTask from './components/Tasks/newTask';
import ConfirmTask from './components/Tasks/confirmTask';
import MyTasks from './components/Tasks/myTasks';
import UserAccount from './components/pages/User/Account';
import CarersContainer from './components/pages/User/CarersContainer'
import IndividualCarer from './components/pages/User/IndividualCarer'


class App extends Component {


  componentDidMount() {
    this.props.getCurrentUser()
  }


  render() {

    return (
      <>
        <div className="page-content">
          <Router>
            <NavBar/>
            <Switch>
              <Route
                exact path={"/"}
                render={props => (
                  <Home
                    {...props}
                    // handleLogout={this.handleLogout}

                    handleLogin={this.handleLogin}
                    loggedIn={this.props.loggedIn}
                  />
                )} />

              <Route
                path={"/dashboard"}
                render={props => (
                  <Dashboard
                    {...props}
                  />
                )} />
              <Route path='/pick-category' component={SplashPage} />


              <Route path='/pick-support-worker' render={props => (
                <CarersContainer
                  {...props}
                  handleLogout={this.handleLogout}
                />
              )} />

              <Route path='/sign-up' render={props => (
                <Registration
                  {...props}
                  handleLogout={this.handleLogout}
                />
              )}
              />
              <Route path='/new-task' render={props => (
                <NewTask
                  {...props}
                  handleLogout={this.handleLogout}
                  handleLogin={this.handleLogin}
                />
              )} />
              <Route path='/carer/:id' render={match => 
                <IndividualCarer match={match} />
              } />
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
    loggedIn: !!state.currentUser,
    carerData: state.carer,
    userData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCarers: () => dispatch(fetchCarers()),
    getCurrentUser: (user) => dispatch(getCurrentUser(user)),
    logout: (user) => dispatch(logout(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
