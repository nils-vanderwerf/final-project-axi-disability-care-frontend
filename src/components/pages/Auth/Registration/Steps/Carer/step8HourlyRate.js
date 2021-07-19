import React, { Component } from 'react'
import { Container, TextField } from '@material-ui/core'

class Step8HourlyRate extends Component {
    constructor(props) {
        super(props)
    
    }
    render() {
        const {value, currentStep, handleChange} = this.props
        if (currentStep !== 8) {
            console.log(`Step: ${currentStep}`)
            return null
        }
        return (
            <Container>
                <h2>Hourly Rate</h2>
                <TextField
                    label="Hourly rate"
                    name="hourly_rate"
                    type="text"
                    value={value.hourly_rate}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                    fullWidth />
            </Container>
        )
    }
}

export default Step8HourlyRate
