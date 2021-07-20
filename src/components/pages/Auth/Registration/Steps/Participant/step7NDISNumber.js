import React, { Component } from 'react'
import {Container, 
        FormControl, 
        FormControlLabel, 
        TextField, 
        RadioGroup, 
        Radio} 
from '@material-ui/core'

//participants only
class Step7NDISNumber extends Component {
    constructor(props) {
        super(props)
    
    }
    render() {
    const {stateValues, currentParticipantStep, handleChange} = this.props
        if (currentParticipantStep !== 7) {
            return null
        }
        return (
            <Container>
            <h2>Step 6</h2>
            <p>Will you use NDIS funding for your services</p>
            
            <RadioGroup aria-label="Will you use NDIS funding for your services?" 
                name="ndis" onChange={handleChange} required>
                    <FormControlLabel 
                        name="stateValues.ndis"
                        control={<Radio checked={stateValues.ndis === 'true'} />}
                        value="true"
                        label="Yes"
                    />
                    <FormControlLabel 
                        name="value.ndis"
                        control={<Radio checked={stateValues.ndis === 'false'} />}
                        value="false"
                        label="No"
                    />
                </RadioGroup>

            {stateValues.ndis ?
            <div class="ndis-number-field">
            <p>Please enter your NDIS number.</p>
            
            <FormControl component="fieldset">
                <TextField
                    label="NDIS number"
                    name="ndis_number"
                    type="text"
                    value={stateValues.ndis_number}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                    fullWidth />
            </FormControl> 
            </div>
            : 
            null
            }
            </Container>
        )
    }
}

export default Step7NDISNumber
