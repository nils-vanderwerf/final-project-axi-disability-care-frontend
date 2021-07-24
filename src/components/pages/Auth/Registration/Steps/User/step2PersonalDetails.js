import { Container, 
        FormGroup, 
        TextField,  
        RadioGroup, 
        Radio, 
        FormControlLabel } 
from '@material-ui/core'
import React, { Component } from 'react'

class Step2PersonalDetails extends Component {
    constructor(props) {
        super(props)
    
    }
    render() {
        const {stateValues, currentCarerStep, currentParticipantStep, handleChange} = this.props
        if ( (currentCarerStep !== 2 && stateValues.role == 'carer') 
        || (currentParticipantStep !== 2 && stateValues.role == 'participant') ) {
            console.log(stateValues.role)
            return null
        }

        return (
            <Container>
                <h3>Personal details</h3>
                <p>To get started, please enter some details</p>
                <FormGroup className="personal details">
                    <TextField
                        label="First Name"
                        name="first_name"
                        type="text"
                        value={stateValues.first_name}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        fullWidth />

                    <TextField
                        label="Last Name"
                        name="last_name"
                        value={stateValues.last_name}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        fullWidth />

                    <TextField
                        label="Email"
                        name="email"
                        type="email"
                        value={stateValues.email}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        fullWidth />

                    <TextField
                        label="Password"
                        name="password"
                        type="password"
                        value={stateValues.password}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        fullWidth />


                    <TextField
                        label="Password Confirmation"
                        name="password_confirmation"
                        type="password_confirmation"
                        type="password"
                        value={stateValues.password_confirmation}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        fullWidth />

                    <TextField
                        label="Age"
                        name="age"
                        type="text"
                        value={stateValues.age}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        fullWidth />

                    <h2>Gender</h2>
                    <RadioGroup component="fieldset" aria-label="Gender"
                        name="gender"
                        value={stateValues.gender}
                        onChange={handleChange}
                        defaultValue="other">
                        <FormControlLabel
                            name="gender"
                            control={<Radio />}
                            value="Male"
                            label="Male"
                        />
                        <FormControlLabel
                            name="gender"
                            control={<Radio />}
                            value="Female"
                            label="Female"
                        />
                        <FormControlLabel
                            name="gender"
                            control={<Radio />}
                            value="Other"
                            label="Other"
                        />
                    </RadioGroup>

                    <h2>Please tell us a bit about yourself</h2>
                    <TextField
                        label="Come on, don't be shy."
                        name="bio"
                        type="text"
                        multiline
                        rows={4}
                        value={stateValues.bio}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        fullWidth />
                </FormGroup>
            </Container >
        
        )
    }
}

export default Step2PersonalDetails
