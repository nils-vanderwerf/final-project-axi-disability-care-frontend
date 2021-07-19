import React, { Component } from 'react'
import {Container, FormControl, TextField} from '@material-ui/core'
import { render } from '@testing-library/react'

class Step6CarerVerification extends Component  {
    constructor(props) {
        super(props)
    }
    render() {
        const {value, currentStep, handleChange} = this.props
        if (currentStep !== 6) {
            console.log(`Step: ${currentStep}`)
            return null
        }
        return (
            <Container>
                <h2>Step 6</h2>
                <p>Please enter your support worker verification number.</p>
                <p>This is your unique 9 digit number to verify that you have meet the necessary
                    background checks to work as a support worker.</p>
                <FormControl component="fieldset">
                <TextField
                    label="Carer Number"
                    name="carer_number"
                    type="text"
                    value={value.carer_number}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                    fullWidth />
                </FormControl>
            </Container>
        )
    }
}

export default Step6CarerVerification
