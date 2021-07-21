import React, { Component } from "react"
import { Container, TextField, FormControl } from "@material-ui/core/"

class Step6DisabilityDetails extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    const { stateValues, currentParticipantStep, handleChange } = this.props
    if (currentParticipantStep !== 6) {
      return null
    }
    return (
      <Container>
        <h3>Disability</h3>
        <p>Please give details of your disability:</p>
        <FormControl component="fieldset">
          <TextField
            label="disability"
            name="disability"
            type="text"
            multiline
            rows={5}
            value={stateValues.disability}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            fullWidth />
        </FormControl>
      </Container>
    )
  }
}

export default Step6DisabilityDetails;