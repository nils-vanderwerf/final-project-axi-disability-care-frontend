import React, { Component } from "react"
import { 
    FormControl, Container, RadioGroup, Radio, FormControlLabel } from "@material-ui/core/"

class Step5Hours extends Component {
    constructor(props) {
        super(props)
    
    }
    render(){
        const {stateValues, currentParticipantStep, currentCarerStep, handleChange} = this.props
        if ( (currentCarerStep !== 5 && stateValues.user_type == 'carer') 
        || (currentParticipantStep !== 5 && stateValues.user_type == 'participant') ) {
            return null
        }

        return (
            <Container>
                <h2>
                    {stateValues.user_type === "carer" ?
                        "How many hours a week do you plan to work?" :
                        "How many hours of support do you think you'll need?"
                    }
                        
                </h2>

                <FormControl component="fieldset">
                    <RadioGroup aria-label="How many hours of support do you think you'll need?" name="hours_of_work" onChange={handleChange} value={stateValues.hours_of_work}>
                        <FormControlLabel
                            name="hours_of_work"
                            control={<Radio checked={stateValues.hours_of_work === "1 - 10 hours"} />}
                            value="1 - 10 hours"
                            label="1 - 10 hours"
                        />
                        <FormControlLabel
                            name="hours_of_work"
                            control={<Radio checked={stateValues.hours_of_work === "11-25 hours"} />}
                            value="11-25 hours"
                            label="11-25 hours"
                        />
                        <FormControlLabel
                            name="hours_of_work"
                            control={<Radio checked={stateValues.hours_of_work === "26-35 hours"} />}
                            value="26-35 hours"
                            label="26-35 hours"
                        />
                        <FormControlLabel
                            name="hours_of_work"
                            control={<Radio checked={stateValues.hours_of_work === "More than 35 hours"}/>}
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