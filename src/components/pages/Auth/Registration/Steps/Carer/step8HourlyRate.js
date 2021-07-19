import React, { Component } from 'react'
import { Container, TextField } from '@material-ui/core'

class Step8HourlyRate extends Component {
    constructor(props) {
        super(props)
    
    }
    render() {
        const {stateValues, currentCarerStep, handleChange} = this.props
        if (currentCarerStep !== 8) {
            return null
        }
        return (
            <Container>
                <h2>Hourly Rate</h2>
                <TextField
                    label="Hourly rate"
                    name="hourly_rate"
                    type="text"
                    value={stateValues.hourly_rate}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                    fullWidth />
            </Container>
        )
    }
}

export default Step8HourlyRate
