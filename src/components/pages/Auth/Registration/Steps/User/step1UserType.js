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
      if ( (currentCarerStep !== 1 && stateValues.role == "Carer") 
      || (currentParticipantStep !== 1 && stateValues.role == "Participant") ) {
        return null
      }
        return (
          <div>
            <h3>Welcome!</h3>
            <p>How can we help you today?</p>
                <input type="radio" onChange={handleChange} id="Carer" name="role" value="Carer" checked={stateValues.role === "Carer"}/>
                <label for="Carer">Carer</label><br/>
                <input type="radio" id="Participant" name="role" value="Participant" onChange={handleChange} checked={stateValues.role === "Participant"}/>
                <label for="css">Participant</label><br/>
          </div>
        )
    }
}
export default Step1UserType;