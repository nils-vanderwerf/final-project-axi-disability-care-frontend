import React, { Component } from "react"
import { 
    FormControl, Container, RadioGroup, Radio, FormControlLabel } from "@material-ui/core/"

class Step5Hours extends Component {
    constructor(props) {
        super(props)
    
    }
    render(){
        const {value, currentStep, handleChange} = this.props
        if (currentStep !== 5) {
            console.log(`Step: ${currentStep}`)
            return null
        }

        return (
            <Container>
                <h2>
                    {value.isCarer ?
                        "How many hours of support do you think you'll need?" :
                        "How many hours a week do you plan to work?"}
                </h2>

                <FormControl component="fieldset">
                    <RadioGroup aria-label="How many hours of support do you think you'll need?" name="hours" onChange={handleChange} defaultValue="yes">
                        <FormControlLabel
                            name="hours"
                            control={<Radio />}
                            value="1 - 10 hours"
                            label="1 - 10 hours"
                        />
                        <FormControlLabel
                            name="hours"
                            control={<Radio />}
                            value="11-25 hours"
                            label="11-25 hours"
                        />
                        <FormControlLabel
                            name="hours"
                            control={<Radio />}
                            value="26-35 hours"
                            label="26-35 hours"
                        />
                        <FormControlLabel
                            name="hours"
                            control={<Radio />}
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