import React, { Component } from 'react'
import { fetchCarers } from '../../../redux/users/fetchCarers/fetchCarerActions'
import {connect} from 'react-redux'

class IndividualCarer extends Component {
  constructor(props) {
      super(props)
  }

  componentDidMount() {
      this.props.fetchCarers()
  }
    render() {
        const carers = this.props.userData.carers.users
        console.log("Carers", carers)
        console.log("Params match: ", this.props.match.match.params.id)
        const matchId = parseInt(this.props.match.match.params.id)
        const thisCarer = carers.find(carer => carer.id === matchId)
        if (this.props.userData && 
          this.props.userData.carers && 
          this.props.userData.carers.users && 
          this.props.userData.carers.users.length > 0) {
            const thisUser = carers.filter(user => user.id == this.props.match.match.params.id)
          return (
              <div>
                {/* {console.log("Props id:", this.props.match.match.params.id)} */}
                <h1>{thisCarer.first_name} {thisCarer.last_name}</h1>
                <h2>Hourly rate: ${thisCarer.hourly_rate}</h2>
                <p><strong>Bio:</strong> {thisCarer.bio}</p>
                 {/* {this.props.userData.carers.users.find(user => user.id === this.props.match.params.id)} */}
              </div>
          )
        } else {
          return <div> <h1> Loading </h1> </div>
        }
    }
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
  )(IndividualCarer)
  
