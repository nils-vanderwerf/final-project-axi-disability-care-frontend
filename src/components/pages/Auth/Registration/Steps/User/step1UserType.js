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
      if ( (currentCarerStep !== 1 && stateValues.role == 'carer') 
      || (currentParticipantStep !== 1 && stateValues.role == 'participant') ) {
        return null
      }
        return (
          <div>
            <h3>Welcome!</h3>
            <p>How can we help you today?</p>
                <input type="radio" onChange={handleChange} id="participant" name="role" value="carer" checked={stateValues.role === 'carer'}/>
                <label for="carer">Carer</label><br/>
                <input type="radio" id="participant" name="role" value="participant" onChange={handleChange} checked={stateValues.role === 'participant'}/>
                <label for="css">Participant</label><br/>
          </div>
        )
    }
}
export default Step1UserType;