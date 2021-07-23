import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchCarers } from '../../../redux/users/fetchCarers/fetchCarerActions'
import { Button } from '@material-ui/core'

const CarersContainer = ({ userData, fetchCarers }) => {
  useEffect(() => {
    fetchCarers()
  }, [])
  return userData.loading ? (
    <h2>Loading</h2>

  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>Pick a support worker</h2>
      <div className="trust-safety-text">
        <p>Always have peace of mind. All Taskers undergo ID and criminal
          background checks.</p>
      </div>
      <div>
        {
          userData.carers.users ?
            userData.carers.users.map(user =>
              <div class="carer">
                <h3>{user.first_name} {user.last_name} </h3>
                <p><strong>Post Code</strong>: {user.zip_code}</p>
                <p>{user.bio}</p>
                <Button variant="contained" color="primary">View</Button>
                <Button variant="contained" color="primary">Book</Button>
                <Button variant="contained" color="primary">Save</Button>
              </div>
            )
            :
            <h2>No support workers to display</h2>
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userData: state.carer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCarers: () => dispatch(fetchCarers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarersContainer)
