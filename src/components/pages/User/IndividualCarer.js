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
        return (
            <div>
                {/* {console.log("List of carers from variable", carers)} */}
                {/* {console.log("Individual user",  this.props.userData)} */}
                {carers.find(user => console.log("Params match", this.props.match.params))}
            </div>
        )
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
  
