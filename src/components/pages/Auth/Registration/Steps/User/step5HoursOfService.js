import React, { Component } from "react"
import { 
    FormControl, Container, RadioGroup, Radio, FormControlLabel } from "@material-ui/core/"

class Step5Hours extends Component {
    constructor(props) {
        super(props)
    
    }
    render(){
        const {stateValues, currentParticipantStep, currentCarerStep, handleChange} = this.props
        if ( (currentCarerStep !== 5 && stateValues.role == "Carer") 
        || (currentParticipantStep !== 5 && stateValues.role == "Participant") ) {
            return null
        }

        return (
            <Container>
                <h2>
                    {stateValues.role === "Carer" ?
                        "How many hours a week do you plan to work?" :
                        "How many hours of support do you think you'll need?"
                    }
                        
                </h2>

                <FormControl component="fieldset">
                    <RadioGroup aria-label="How many hours of support do you think you'll need?" name="available_hours" onChange={handleChange} value={stateValues.available_hours}>
                        <FormControlLabel
                            name="available_hours"
                            control={<Radio checked={stateValues.available_hours === "1 - 10 hours"} />}
                            value="1 - 10 hours"
                            label="1 - 10 hours"
                        />
                        <FormControlLabel
                            name="available_hours"
                            control=
                            {<Radio checked={stateValues.available_hours === "11-25 hours"} />}
                            value="11-25 hours"
                            label="11-25 hours"
                        />
                        <FormControlLabel
                            name="available_hours"
                            control=
                            {<Radio checked={stateValues.available_hours === "26-35 hours"} />
                            }
                            value="26-35 hours"
                            label="26-35 hours"
                        />
                        <FormControlLabel
                            name="available_hours"
                            control={<Radio checked={stateValues.available_hours === "More than 35 hours"}/>}
                            value="More than 35 hours"
                            label="More than 35 hours"
                        />
                    </RadioGroup>
                </FormControl>

            </Container>
        )
    }
}

export default Step5Hours;