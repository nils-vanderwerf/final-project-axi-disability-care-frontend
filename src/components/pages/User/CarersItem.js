import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

class CarersItem extends React.Component {
    constructor(props) {
        super(props)

        
    }

    fetchIndividualUser() {

    }
    render(){
        const {user} = this.props
    return (
        <div class="carer">
            <h3>{user.first_name} {user.last_name} </h3>
            <p>{user.zip_code}</p>
            <p>Hourly rate: <strong>${user.hourly_rate}</strong></p>
            <p>{user.age} years old.</p>
            <p>Gender: {user.gender}</p>
            <p>Has Vehicle: {user.has_vehicle ? "Yes" : "No"}</p>
            <p>Background Check: {user.carer_number ? "Yes" : "No"}</p>
            <p>First Aid: {user.first_aid_training ? "Yes" : "No"}</p>
            <p>Available for: {user.hours_of_work} of work.</p>
            <p>{user.bio}</p>
            <Link to={ { pathname: `/carer/${user.id}` } }>
                <Button onClick={this.fetchIndividualUser} variant="contained" color="primary">
                Select and Continue
            </Button>
            </Link>
            <Button variant="contained" color="primary">
                Save
            </Button>
        </div>
    )
    }
}

export default CarersItem
