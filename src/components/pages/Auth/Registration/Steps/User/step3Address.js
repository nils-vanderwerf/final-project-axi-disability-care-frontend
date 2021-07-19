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
    const {value, currentStep, handleAddressChange} = this.props
    if (currentStep !== 3) {
      console.log(`Step: ${currentStep}`)
      return null
    } 

    return (
      <Container>
        <FormControl component="fieldset" className="address-form" fullWidth>
          <h2>Step 3</h2>
          <p>Where are you based?</p>
          <TextField
            label="City"
            id="city"
            name="address.city"
            type="text"
            value={value.address.city}
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
              name="values.address.state"
              value={value.state}
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
            name="values.address.postcode"
            type="text"
            name="postcode"
            value={value.values.postcode}
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

