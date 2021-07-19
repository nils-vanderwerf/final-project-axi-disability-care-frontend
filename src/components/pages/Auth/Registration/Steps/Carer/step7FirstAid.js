import React, { Component } from 'react'
import {Container, Radio, RadioGroup, FormControlLabel} from'@material-ui/core'

class Step7FirstAid extends Component  {
    constructor(props) {
        super(props)
    
    }
    render() {
        const {value, currentStep, handleChange} = this.props
        if (currentStep !== 7) {
            console.log(`Step: ${currentStep}`)
            return null
        }
        return (
        <Container>
            <h2>Do you have your first aid certificate?</h2>
            <RadioGroup aria-label="How can we help you today?"
                name="first_aid_training" onChange={handleChange} required>
                <FormControlLabel
                    name="first_aid_training"
                    control={<Radio />}
                    value="true"
                    label="Yes"
                />
                <FormControlLabel
                    name="first_aid_training"
                    control={<Radio />}
                    value="false"
                    label="No"
                />
            </RadioGroup>
        </Container>
        )
    }
}

export default Step7FirstAid;
