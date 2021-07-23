import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
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


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    }

    this.handleLogin = this.handleLogin.bind(this);
    // this.handleLogout = this.handleLogout.bind(this)

  }

  handleSuccessfulAuth(data) {
    this.props.history.push('/dashboard')
}

  handleLogin(data) {
    this.setState({
      loggedInStatus: 'LOGGED_IN',
      user: data
    })
  }



  checkLoginStatus() {
    axios.get("http://localhost:3001/api/v1/get_current_user", { withCredentials: true })
      .then(response => {
        if (response.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN") {
          this.setState({
            loggedInStatus: "LOGGED_IN",
            user: response.data.user
          })
        } else if (!response.data.logged_in & this.state.loggedInStatus === "LOGGED_IN") {
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

  createUrlSlug() {

  }


  componentDidMount() {
    this.checkLoginStatus();
    // this.props.getCurrentUser();
  }


  render() {
    return (
      <>
        <div className="page-content">

          <Router>
            <AppBar position="static" color="primary">
              <Container>

                {
                  this.props.loggedInStatus === 'NOT_LOGGED_IN' ?
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
                    loggedInStatus={this.state.loggedInStatus}
                  />
                )} />

              <Route
                path={"/dashboard"}
                render={props => (
                  <Dashboard
                    {...props}
                    loggedInStatus={this.state.loggedInStatus}
                    user={this.state.user}
                  />
                )} />
              <Route path='/pick-category' component={SplashPage} />


              <Route path='/pick-support-worker' render={props => (
                <CarersContainer
                  {...props}
                  handleLogout={this.handleLogout}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )} />

              <Route path='/sign-up' render={props => (
                <Registration
                  {...props}
                  handleLogout={this.handleLogout}
                  loggedInStatus={this.state.loggedInStatus}
                  handleSuccessfulAuth={this.handleSuccessfulAuth}
                />
              )} />
              <Route path='/new-task' render={props => (
                <NewTask
                  {...props}
                  handleLogout={this.handleLogout}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )} />
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

// const mapStateToProps = state => {
//   return {
//     loggedIn: !!state.currentUser
//   };
// };

export default App;
