import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../../redux/users/fetchUsers/fetchUserActions'
import {Button} from '@material-ui/core'

const Carers = ({ userData, fetchUsers }) => {
  useEffect(() => {
    fetchUsers()
  }, [])
  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>Users List</h2>
      <div>
        {
          userData.users.map(user => 
          <div class="carer">
                <h3>{user.first_name} {user.last_name} </h3>
                <p><strong>Post Code</strong>: {user.zip_code}</p>
                <p>{user.bio}</p>
                <Button variant="contained" color="primary">Book Support Worker</Button>
          </div>
          
          )
          }
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Carers)