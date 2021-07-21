import React, { Component } from "react";
import {
  Select,
  InputLabel,
  TextField,
  MenuItem,
  FormControl,
  Container} 
from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const states = [
  ["NSW", "New South Wales"],
  ["VIC", "Victoria"],
  ["QLD", "Queensland"],
  ["SA", "South Austalia"],
  ["NT", "Northern Terriitory"],
  ["WA", "Western Australia"],
  ["TAS", "Tasmania"],
  ["ACT", "Australian Capital Territory"],
];


class Step3Address extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    const {stateValues, currentCarerStep, currentParticipantStep, handleChange} = this.props
    if ( (currentCarerStep !== 3 && stateValues.role == 'carer') 
    || (currentParticipantStep !== 3 && stateValues.role == 'participant') ) {
      return null
    } 
    
    return (
      <Container>
        
        <FormControl component="fieldset" className="address-form" fullWidth>
          <h3>Address</h3>
          <p>Where are you based?</p>
          <TextField
            label="City"
            id="address"
            name="address"
            type="text"
            value={stateValues.city}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            fullWidth
          />

          <div class="select-wrapper">
            <InputLabel id="city-state">Select a state</InputLabel>
            <Select
              id="city-state"
              labelId="city-state"
              className="select"
              name="state"
              value={stateValues.state}
              defaultValue="Select a state"
              onChange={handleChange}
              fullWidth
              variant="outlined"
            >
              <option disabled>
            Select a state
          </option>
              {states.map(([value, name]) => (
                <MenuItem value={value} key={value}>{name}</MenuItem>
              ))}
            </Select>
          </div>

          <TextField
            label="Zip Code"
            type="text"
            name="zip_code"
            value={stateValues.zip_code}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            fullWidth
          />
        </FormControl>
      </Container>
    );
  }
}

export default Step3Address;

