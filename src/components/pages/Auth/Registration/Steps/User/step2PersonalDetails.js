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
        const {value, currentStep, handleChange} = this.props
        if (currentStep !== 2) {
            return null
        }

        return (
            <Container>
                <h2>Personal details.</h2>
                <p>To get started, please enter some details</p>
                <FormGroup className="personal details">
                    <TextField
                        label="First Name"
                        name="first_name"
                        type="text"
                        value={value.first_name}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        fullWidth />

                    <TextField
                        label="Last Name"
                        name="last_name"
                        value={value.last_name}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        fullWidth />

                    <TextField
                        label="Email"
                        name="email"
                        type="email"
                        value={value.email}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        fullWidth />

                    <TextField
                        label="Password"
                        name="password"
                        type="password"
                        value={value.password}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        fullWidth />


                    <TextField
                        label="Password Confirmation"
                        name="password_confirmation"
                        type="password_confirmation"
                        type="password"
                        value={value.password_confirmation}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        fullWidth />

                    <TextField
                        label="Age"
                        name="age"
                        type="text"
                        value={value.age}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        fullWidth />

                    <TextField
                        label="Zip COde"
                        name="zip_code"
                        type="text"
                        value={value.zip_code}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        fullWidth />

                    <h2>Gender</h2>
                    <RadioGroup component="fieldset" aria-label="Gender"
                        name="gender"
                        value={value.gender}
                        onChange={handleChange}
                        defaultValue="other">
                        <FormControlLabel
                            name="gender"
                            control={<Radio />}
                            value="male"
                            label="Male"
                        />
                        <FormControlLabel
                            name="gender"
                            control={<Radio />}
                            value="female"
                            label="Female"
                        />
                        <FormControlLabel
                            name="gender"
                            control={<Radio />}
                            value="other"
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
                        value={value.bio}
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
