import {
    Container,
    FormGroup,
    TextField,
    RadioGroup,
    Radio,
    FormControlLabel,
    Button
}
    from '@material-ui/core'
import React, { Component } from 'react'
import axios from 'axios'

class Step2PersonalDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fileInputState: '',
            previewSource: '',
            selectedFile: '',
            successMsg: '',
            errMsg: ''
        }

        // this.handleFileInputChange = this.handleFileInputChange.bind(this)
        this.handleSubmitFile = this.handleSubmitFile.bind(this);
    }



    handleSubmitFile = (event) => {
        event.preventDefault();
        const selectedImage = this.props.stateValues.profile_picture
        if (!selectedImage) return
        this.uploadImage(selectedImage)
        const formData = new FormData()
        console.log(selectedImage)
        formData.append('file', selectedImage)
        formData.append("upload_preset", "user_profile_pictures")

        axios.post("https://api.cloudinary.com/v1_1/dfiu0abeq/image/upload", formData)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                var url = data.secure_url;
            });
    }

    render() {
        const { stateValues, currentCarerStep, currentParticipantStep, handleChange, handleFileSelect, fileUploadState } = this.props
        if ((currentCarerStep !== 2 && stateValues.role == "Carer")
            || (currentParticipantStep !== 2 && stateValues.role == "Participant")) {
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
                    <h2>Choose profile picture</h2>
                    <div className="profile-picture-upload">
                        <input type="file"
                            name="profile_picture"
                            onChange={handleFileSelect} />
                        <Button variant="contained"
                            onClick={this.handleSubmitFile}>
                            Upload image
                        </Button>
                        {fileUploadState.previewSource && (
                            <img src={fileUploadState.previewSource}
                                alt="chosen"
                                style={{ height: '100px' }} />
                        )}
                    </div>

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
