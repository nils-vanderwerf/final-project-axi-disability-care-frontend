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
      const {stateValues, currentCarerStep, currentParticipantStep, handleChange} = this.props
      // The markup for the Step 1 UI
      if ( (currentCarerStep !== 1 && stateValues.user_type == 'carer') 
      || (currentParticipantStep !== 1 && stateValues.user_type == 'participant') ) {
        return null
      }
        return (
          <Container>
            <h3>Welcome!</h3>
            <p>How can we help you today?</p>
            <RadioGroup aria-label="How can we help you today?"
              name="user_type" value={stateValues.user_type} onChange={handleChange} required>
              <FormControlLabel
                name="user_type"
                control={<Radio checked={stateValues.user_type === 'carer'} />}
                value="carer"
                label="I'm seeking support"
              />
              <FormControlLabel
                name="user_type"
                control={<Radio checked={stateValues.user_type === 'participant'} />}
                value="participant"
                label="I would like to provide support"
              />
            </RadioGroup>

          </Container>
        )
    }
}
export default Step1UserType;