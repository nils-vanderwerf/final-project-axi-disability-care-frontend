import axios from 'axios';
import React, { Component } from 'react'
import { Container, FormControl, FormGroup, InputLabel, TextField, Button, RadioGroup, Radio, FormControlLabel } from '@material-ui/core';

export default class Registration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                is_carer: false,
                first_name: "",
                last_name: "",
                bio: "",
                age: "",
                gender: "",
                zip_code: 2000,
                has_vehicle: false,
                email: "",
                first_aid_training: false,
                background_check: false,
                hourly_rate: 50,
                password: "",
                password_confirmation: ""
            },
            registrationErrors: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        const { user } = { ...this.state };
        event.preventDefault()
        axios.post('http://localhost:3001/api/v1/registrations', {
            user: user
        },
            { withCredentials: true }
        ).
            then(response => {
            if (response.data.status === 'created') {
                this.props.handleSuccessfulAuth(response.data);
            }
        })
        .catch(error => {
            console.log("registration error", error)
        })
    }

    handleChange(event) {
        const { user } = { ...this.state };
        const currentState = user;
        const { name, value } = event.target;
        currentState[name] = value;
      
        this.setState({ user: currentState });
    }

    render() {
        const { first_name, last_name, email, password, password_confirmation, bio, age, gender, zip_code, is_carer, has_vehicle, hourly_rate, first_aid_training, background_check } = this.state.user

        return (
            <Container class="form-wrapper">
                <FormControl component="fieldset"
                    className="personal-details-form" fullWidth >
                <h2>Welcome!</h2>
                <p>How can we help you today?</p>
                    <RadioGroup aria-label="How can we help you today?"
                        name="user_type" onChange={this.handleChange} value={this.state.is_carer} defaultValue="false" required>
                        <FormControlLabel
                            name="is_carer"
                            control={<Radio />}
                            value="false"
                            label="I'm seeking support"
                        />
                        <FormControlLabel
                            name="is_carer"
                            control={<Radio />}
                            value="true"
                            label="I would like to provide support"
                        />
                    </RadioGroup>

                <h2>Personal details.</h2>
                <p>To get started, please enter some details</p>
                    

                    <FormGroup className="personal details">
                        <TextField
                            label="First Name"
                            name="first_name"
                            type="text"
                            value={first_name}
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                            fullWidth />
                    
                        <TextField
                            label="Last Name"
                            name="last_name"
                            value={last_name}
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                            fullWidth />
                    
                        <TextField
                            label="Email"
                            name="email"
                            type="email"
                            value={email}
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                            fullWidth />
                    
                        <TextField
                            label="Password"
                            name="password"
                            type="password"
                            value={password}
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                            fullWidth />
                        

                        <TextField
                            label="Password Confirmation"
                            name="password_confirmation"
                            type="password_confirmation"
                            type="password"
                            value={password_confirmation}
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                            fullWidth />
                            
                        <TextField
                            label="Age"
                            name="age"
                            type="text"
                            value={age}
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                            fullWidth />

                        <TextField
                            label="Zip COde"
                            name="zip_code"
                            type="text"
                            value={zip_code}
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                            fullWidth />

                            <h2>Gender</h2>
                            <RadioGroup component="fieldset" aria-label="Gender"
                            name="gender"
                            value={gender}
                            onChange={this.handleChange}
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
                                value={bio}
                                onChange={this.handleChange}
                                margin="normal"
                                variant="outlined"
                                fullWidth />
                            </FormGroup>

                        {/* //carers */}
                        <h2>Hourly Rate</h2>
                        <TextField
                            label="Hourly rate"
                            name="hourly_rate"
                            type="text"
                            value={hourly_rate}
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                            fullWidth />

                        <h2>First Aid</h2>
                        <p>Do you have a first aid certification?</p>
                            <RadioGroup component="fieldset" aria-label="First Aid Training"
                                name="first_aid_training"
                                value={first_aid_training}
                                onChange={this.handleChange}
                                >
                                
                            <FormControlLabel
                                name="first_aid_training"
                                control={<Radio />}
                                value="true"
                                label="Yes"
                            />

                            <FormControlLabel
                                name="first_aid_training"
                                control={<Radio />}
                                value="false"
                                label="No"
                            />
                            </RadioGroup>

                            <h2>Vehicle</h2>
                            <p>Do you have a vehicle you can use to drive your participant around (e.g to their appointments)?</p>
                            <RadioGroup component="fieldset" aria-label="Gender"
                                name="has_vehicle"
                                value={has_vehicle}
                                onChange={this.handleChange}
                                defaultValue="true">
                            <FormControlLabel
                                name="has_vehicle"
                                control={<Radio />}
                                value="true"
                                label="Yes"
                            />
                            <FormControlLabel
                                name="has_vehicle"
                                control={<Radio />}
                                value="false"
                                label="No"
                            />
                            </RadioGroup>

                        <h2>Background Check </h2>
                        <p>It is a requirement that all carers undergo a police check and working with kids check. Do you consent? </p>
                        <RadioGroup component="fieldset" aria-label="Gender"
                            name="background_check"
                            value={background_check}
                            onChange={this.handleChange}
                            defaultValue="other">

                        <FormControlLabel
                            name="background_check"
                            control={<Radio />}
                            value="true"
                            label="Yes"
                        />
                        <FormControlLabel
                            name="background_check"
                            control={<Radio />}
                            value="false"
                            label="No"
                        />
                        </RadioGroup>

                    </FormControl>
                    
                    <Button htmlType="submit" 
                    color="primary" 
                    variant="contained" 
                    onClick={this.handleSubmit}>
                        Submit
                    </Button>

            </Container >
        )
    }
}
