import React, { Component } from "react"
import {
  FormControl,
  FormGroup,
  Container,
  FormLabel,
  FormControlLabel,
  Checkbox
} from "@material-ui/core/";

class Step4SupportCategoryDetails extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {value, currentStep, handleChange} = this.props
    if (currentStep !== 4) {
      console.log(`Step: ${currentStep}`)
      return null
    }
    return (
      <Container>
        <h1>Step 4</h1>
        <FormControl component="fieldset">
          <FormLabel component="legend">Support Categories</FormLabel>

          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  id="1"
                  onChange={this.handleCheckboxChange}
                  value="help_around_house" 
                  name="help_around_house" />}
                  label="Help Around House"
            />
            <p>
              Cleaning, yard maintenance, and home-office duties.
            </p>

            <FormControlLabel
              control={
                <Checkbox
                  id="2"
                  onChange={this.handleCheckboxChange}
                  value="personal_care"
                  name="personal_care" />}
                  label="Personal Care"
            />
            <p>
              Things like showering, toileting and mealtime assistance at home or in the community.
            </p>

            <FormControlLabel
                id="3"
                control={<Checkbox
                onChange={this.handleCheckboxChange}
                value="education_and_employment" name="education_and_employment" />}
                label="Education and employment"
            />
            <p>
              Coaching to help you achieve your goals at school, college or work.
            </p>

            <FormControlLabel
              control={
                <Checkbox
                  id="4"
                  onChange={this.handleCheckboxChange}
                  value="in_home_care"
                  name="in_home_care" />}
                  label="In home care"
            />
            <p>
              Help with morning and evening routines, sweeping, mopping, dishes, medical prompts, and meal preparation.
            </p>

            <FormControlLabel
              control={
                <Checkbox
                  id="5"
                  onChange={this.handleCheckboxChange}
                  value="transport"
                  name="transport" />}
                  label="Transport"
            />

            <FormControlLabel
              control={
                <Checkbox
                  id="6"
                  onChange={this.handleCheckboxChange}
                  value="out_and_about"
                  name="out_and_about" />}
                  label="Out and about"
            />
            <p>
              Support to get out, take a class, exercise, volunteer or go to gatherings.
            </p>

            
            <p>
              Help to get your chores done or travel from A to B.
            </p>

            <FormControlLabel
              control={
                <Checkbox
                  onChange={this.handleCheckboxChange}
                  id="7"
                  value="therapy"
                  name="therapy" />}
                  label="Therapy"
            />
            <p>
              Disability support workers can help with support to plan, practice, and enjoy your therapy.
            </p>
            <p>
              Therapy may include:
            </p>
            <ul className="therapy-categories">
              <li>Occupational therapy</li>
              <li>Hydrotherapy</li>
              <li>Exercise physiology</li>
              <li>Counselling</li>`
            </ul>

            <FormControlLabel
              control={
                <Checkbox
                  id="8"
                  onChange={this.handleCheckboxChange}
                  value="specialised"
                  name="specialised"/>}
                  label="Specialised (Complex)"
            />
            <p>
              May include but not limited to:
            </p>

            <ul>

            </ul>

          </FormGroup>
        </FormControl>
      </Container>
    )
  }
}

export default Step4SupportCategoryDetails;