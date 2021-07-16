import axios from 'axios';
import React, { Component } from 'react'
import { Container, FormControl, FormGroup, InputLabel, TextField, Button, RadioGroup, Radio, FormControlLabel } from '@material-ui/core';

export default class Registration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user_type: "",
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
            password_confirmation: "",
            registrationErrors: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        const { user_type, first_name, last_name, email, password, password_confirmation, bio, age, gender, zip_code, has_vehicle, hourly_rate } = this.state
        console.log("form submitted")
        event.preventDefault()
        axios.post('http://localhost:3001/api/v1/registrations', {
            user: {
                is_carer: user_type === "carer",
                first_name: first_name,
                last_name: last_name,
                email: email,
                password: password,
                bio: bio,
                age: age,
                gender: gender,
                zip_code: zip_code,
                has_vehicle: has_vehicle,
                first_aid_training: first_aid_training,
                hourly_rate: hourly_rate,
                background_check: background_check === "carer",
                first_aid_training: false,
                hourly_rate: 50
            }
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
    this.setState({
        [event.target.name]: event.target.value
    })
    }
    render() {
        const { first_name, last_name, email, password, password_confirmation, bio, age, gender, zip_code, user_type, has_vehicle } = this.state
        return (
        <Container>
            <h2>Welcome!</h2>
            <p>How can we help you today?</p>

            <RadioGroup aria-label="How can we help you today?"
                name="user_type" onChange={this.handleChange} required>
                <FormControlLabel
                    name="user_type"
                    control={<Radio />}
                    value="participant"
                    label="I'm seeking support"
                />
                <FormControlLabel
                    name="user_type"
                    control={<Radio />}
                    value="carer"
                    label="I would like to provide support"
                />
            </RadioGroup>

            <h2>Personal details.</h2>
            <p>To get started, please enter some details</p>
        <FormControl component="fieldset"
        className="personal-details-form" fullWidth >

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
        </FormControl>

        {/* //carers */}
        <h2>What is your hourly rate?</h2>
        <TextField
            label="Hourly rate"
            name="hourly_rate"
            type="text"
            value={hourly_rate}
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
            fullWidth 
        />


        <h2>First Aid</h2>
        <h2>Do you have a first aid certification?</h2>
        <RadioGroup component="fieldset" aria-label="Gender"
        name="gender"
        value={gender}
        onChange={this.handleChange}
        defaultValue="other">
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
            label="Female"
        />
        </RadioGroup>

        <h2>Vehicle</h2>
        <h2>Do you own transportation you can use for your services?</h2>
        <RadioGroup component="fieldset" aria-label="Gender"
        name="gender"
        value={gender}
        onChange={this.handleChange}
        defaultValue="other">
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
            label="Female"
        />
        </RadioGroup>

        {/* //carers */}
        <h2>Consent</h2>
        <p>It is a requirement that all carers undergo a police background check. Do you consent? </p>
        <RadioGroup component="fieldset" aria-label="Gender"
        name="gender"
        value={gender}
        onChange={this.handleChange}
        defaultValue="other">
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
            label="Female"
        />
        </RadioGroup>
        <h2>Background Check </h2>
        <p>It is a requirement that all carers undergo a police check and working with kids check. Do you consent? </p>
        <RadioGroup component="fieldset" aria-label="Gender"
        name="gender"
        value={gender}
        onChange={this.handleChange}
        defaultValue="other">
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
            label="Female"
        />
        </RadioGroup>

        <h2>First Aid</h2>
        <h2>Do you have your first aid certification?</h2>
        <RadioGroup component="fieldset" aria-label="Gender"
        name="gender"
        value={gender}
        onChange={this.handleChange}
        defaultValue="other">
        <FormControlLabel
            name="first_aid"
            control={<Radio />}
            value="true"
            label="Yes"
        />
        <FormControlLabel
            name="first_aid"
            control={<Radio />}
            value="false"
            label="Female"
        />
        </RadioGroup>

    </FormControl>
    {/* //carers */}

    </FormControl>

    </Container >
    )
    }
    }
