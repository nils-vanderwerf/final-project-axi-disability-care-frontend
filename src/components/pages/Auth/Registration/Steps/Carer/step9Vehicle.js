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
        const {stateValues, currentCarerStep, handleChange} = this.props
        if (currentCarerStep !== 9 ) {
            return null
        } 
        return (
            <Container>
                <p>Do you have a vehicle? (You might be entitled to some vehicle allowance if you use your vehicle to transport your participant).</p>
                <RadioGroup aria-label="Do you have a vehicle? " 
                name="has_vehicle" onChange={handleChange} required>
                    <FormControlLabel 
                        name="vehicle"
                        control={<Radio checked={stateValues.has_vehicle === 'true'} />}
                        value="true"
                        label="Yes"
                    />
                    <FormControlLabel 
                        name="vehicle"
                        control={<Radio checked={stateValues.has_vehicle === 'false'} />}
                        value="false"
                        label="No"
                    />
                </RadioGroup>
            </Container>
        )
    }
}

export default Step9Vehicle;
