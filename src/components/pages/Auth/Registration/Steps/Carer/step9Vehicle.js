import React, { Component } from 'react'
import {
    Container,
    FormControlLabel,
    RadioGroup,
    Radio,
  } from "@material-ui/core/";
import { getDefaultNormalizer } from '@testing-library/react';

class Step9Vehicle extends Component {
    constructor(props) {
        super(props)
    
    }
    render() {
        const {value, currentStep, handleChange} = this.props
        if (currentStep !== 9 ) {
            console.log(`Step: ${currentStep}`)
            return null
        } 
        return (
            <Container>
                <p>Do you have a vehicle? (You might be entitled to some vehicle allowance if you use your vehicle to transport your participant).</p>
                <RadioGroup aria-label="Do you have a vehicle? " 
                name="police_check" onChange={handleChange} required>
                    <FormControlLabel 
                        name="vehicle"
                        control={<Radio />}
                        value="true"
                        label="Yes"
                    />
                    <FormControlLabel 
                        name="vehicle"
                        control={<Radio />}
                        value="false"
                        label="No"
                    />
                </RadioGroup>
            </Container>
        )
    }
}

export default Step9Vehicle;
