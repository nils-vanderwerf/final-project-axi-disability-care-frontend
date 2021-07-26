import { AppBar, Container, Button } from '@material-ui/core'
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCurrentUser, logout } from '../redux/users/currentUser/currentUserActions'

class NavBar extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log(this.props.userData)
    }
    render() {
        return (
            <div>
                 <AppBar position="static" color="primary">
              <Container>

                {
                  this.props.userData  ?
                    <>
                    <Link to={{ pathname: '/login' }}>
                      <Button className="dark-theme">Login</Button>
                    </Link>

                     <Link to="/sign-up" className="ml-auto">
                       <Button type="submit"
                       className="dark-theme">
                         Join
                       </Button>
                   </Link>
                   </>
                    :
                    <Link to={{ pathname: '/logout' }}>
                      <Button className="dark-theme">Logout</Button>
                    </Link>

                }
              </Container>
              </AppBar>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      userData: state.user
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      getCurrentUser: (user) => dispatch(getCurrentUser(user)),
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavBar)
  
