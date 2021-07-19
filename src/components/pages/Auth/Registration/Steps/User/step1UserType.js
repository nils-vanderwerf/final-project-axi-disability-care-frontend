import React, {Component} from "react";
import axios from "axios";
import { Container,
        RadioGroup, 
        Radio, 
        FormControlLabel } 
from "@material-ui/core/"

class Step1UserType extends Component {
  constructor(props) {
    super(props)

}
  render() {
      const {value, currentStep, handleChange} = this.props
      // The markup for the Step 1 UI
      if ( currentStep !== 1) {
        console.log(`Step: ${currentStep}`)
        return null
      }
        return (
          <Container>
            <h2>Welcome!</h2>
            <h2>How can we help you today?</h2>
            <RadioGroup aria-label="How can we help you today?"
              name="value.is_carer" value={value.isCarer} onChange={this.props.handleChange} required>
              <FormControlLabel
                name="is_carer"
                control={<Radio />}
                value="true"
                label="I'm seeking support"
              />
              <FormControlLabel
                name="is_carer"
                control={<Radio />}
                value="false"
                label="I would like to provide support"
              />
            </RadioGroup>

          </Container>
        )
    }
}
export default Step1UserType;