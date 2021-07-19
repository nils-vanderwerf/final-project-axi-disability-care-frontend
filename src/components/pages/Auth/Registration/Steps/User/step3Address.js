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
    const {stateValues, currentCarerStep, currentParticipantStep, handleAddressChange} = this.props
    if (currentCarerStep !== 3 && currentParticipantStep !== 3 ) {
      return null
    } 
    
    return (
      <Container>
        
        <FormControl component="fieldset" className="address-form" fullWidth>
          <h3>Address</h3>
          <p>Where are you based?</p>
          <TextField
            label="City"
            id="city"
            name="city"
            type="text"
            value={stateValues.address.city}
            onChange={handleAddressChange}
            margin="normal"
            variant="outlined"
            fullWidth
          />

          <div class="select-wrapper">
            <InputLabel id="address-state"></InputLabel>
            <Select
              labelId="address-state"
              className="select"
              name="state"
              value={stateValues.address.state}
              onChange={handleAddressChange}
              fullWidth
              variant="outlined"
            >
              {states.map(([value, name]) => (
                <MenuItem value={value.value}>{name}</MenuItem>
              ))}
            </Select>
          </div>

          <TextField
            label="Zip Code"
            type="text"
            name="zip_code"
            value={stateValues.zip_code}
            onChange={handleAddressChange}
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

