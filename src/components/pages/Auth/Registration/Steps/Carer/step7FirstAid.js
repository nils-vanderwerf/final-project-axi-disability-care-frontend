import React, { Component } from 'react'
import {Container, Radio, RadioGroup, FormControlLabel} from'@material-ui/core'

class Step7FirstAid extends Component  {
    constructor(props) {
        super(props)
    
    }
    render() {
        const {stateValues, currentCarerStep, handleChange} = this.props
        if (currentCarerStep !== 7) {
            return null
        }
        return (
        <Container>
            <h2>Do you have your first aid certificate?</h2>
            <RadioGroup aria-label="How can we help you today?"
                name="first_aid_training" 
                onChange={handleChange} 
                value={stateValues.first_aid_training} 
                required>
                <FormControlLabel
                    name="first_aid_training"
                    control={<Radio checked={stateValues.first_aid_training === 'true'} />}
                    value="true"
                    label="Yes"
                />
                <FormControlLabel
                    name="first_aid_training"
                    control={<Radio checked={stateValues.first_aid_training === 'false'} />}
                    value="false"
                    label="No"
                />
            </RadioGroup>
        </Container>
        )
    }
}

export default Step7FirstAid;
