import axios from 'axios';
import React, { Component } from 'react'
import { Container, FormControl, FormGroup, InputLabel, TextField, Button, RadioGroup, Radio, FormControlLabel } from '@material-ui/core';
import { connect } from 'react-redux';
import { getCurrentUser } from '../../../../redux/actions/session_actions';
import Step1UserType from './Steps/User/step1UserType';
import Step2PersonalDetails from './Steps/User/step2PersonalDetails';
import Step3Address from './Steps/User/step3Address';
import Step4SupportCategoryDetails from './Steps/User/step4SupportCategoryDetails';
import Step5Hours from './Steps/User/step5HoursOfService';

//Participant
import Step6DisabilityDetails from './Steps/Participant/step6DisabilityDetails';
import Step6CarerVerification from './Steps/Carer/step6CarerVerification';
import Step7FirstAid from './Steps/Carer/step7FirstAid';
import Step7NDISNumber from './Steps/Participant/step7NDISNumber';
import Step8HourlyRate from './Steps/Carer/step8HourlyRate';
import Step9Vehicle from './Steps/Carer/step9Vehicle';
import { makeStyles } from "@material-ui/core/styles";
import { string } from 'prop-types';
import ReviewStep from './ReviewStep';

class Registration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentCarerStep: 1,
            currentParticipantStep: 1,
            editStep: 1,
            user: {
                role: "Carer",
                first_name: "",
                last_name: "",
                // profile_picture: "",
                bio: "",
                age: "",
                gender: "",
                address: {
                    city: "",
                    state: "",
                    zip_code: "",
                },
                email: "",
                available_hours: 15,
                categories: [],
                hourly_rate: 50,
                first_aid_training: 'false',
                carer_number: null,
                has_vehicle: 'false',
                disability: '',
                ndis: 'true',
                ndis_number: null,
                password: "",
                password_confirmation: ""
            },
            fileInputState: '',
            selectedFile: '',
            previewSource: null,
            submitResponse: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
        this.handleFileSelect = this.handleFileSelect.bind(this);
        this.previewFile = this.previewFile.bind(this);

        
       
        // this.handleNestedChange = this.handleNestedChange.bind(this);
        // // this.handleRadioChange = this.handleRadioChange.bind(this);
    }

    useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
        },
        button: {
            marginRight: theme.spacing(1),
        },
        completed: {
            display: 'inline-block',
        },
        instructions: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
    }));



    handleSubmit(event) {
        event.preventDefault()
        const { user } = { ...this.state};
        console.log("Address", user.city, user.state, user.zip_code)
        const category_ids = (user.categories ? user.categories.map(element => element.id) : null)
        // const category_ids = allCategoryIds
        
        const address_attributes = {
            city: user.city,
            state: user.state,
            zip_code: user.zip_code
        }

        const user_attributes = {
            role: user.role,
            email: user.email,
            password: user.password,
            password_confirmation: user.password_confirmation,
            first_name: user.first_name,
            last_name: user.last_name,
            bio: user.bio,
            age: user.age,
            gender: user.gender,
            available_hours: user.available_hours,
            category_ids: category_ids,
            address_attributes: address_attributes
            
        }

        const carer = {
            hourly_rate: user.hourly_rate,
            first_aid_training: user.first_aid_training,
            has_vehicle: user.has_vehicle,
            carer_number: user.carer_number 
        }

        const participant = {
            ndis: user.ndis,
            ndis_number: user.ndis_number,
            disability: user.disability
        }

        axios.post('http://localhost:3001/api/v1/users', {
            user: user_attributes        
        },
            {withCredentials: true}
        )
        .then(response => {
            console.log("response", response)
            if (response.data.status === 'created') {
                console.log(response.data)
                // this.props.getCurrentUser(response.data)1`
                this.props.history.push("/dashboard", response.data)
            }
        })
        .catch(error => {
            console.log("registration error", error,)
        })
    }



    _next = () => {
        let currentParticipantStep = this.state.currentParticipantStep
        let currentCarerStep = this.state.currentCarerStep
        if (currentCarerStep < 10 && this.state.user.role == "Carer") {
            console.log(this.state.user.role)
            this.setState({
                currentCarerStep: currentCarerStep + 1
            })
        }
        if (currentParticipantStep < 8 && this.state.user.role == "Participant") {
            console.log(!this.state.user.role)
            this.setState({
                currentParticipantStep: currentParticipantStep + 1
            })
        }
    }

    _prev = () => {
        let currentParticipantStep = this.state.currentParticipantStep
        let currentCarerStep = this.state.currentCarerStep
        currentCarerStep = currentCarerStep <= 1 ? 1 : currentCarerStep - 1

        currentParticipantStep = currentParticipantStep <= 1 ? 1 : currentParticipantStep - 1

        this.setState({
            currentParticipantStep: currentParticipantStep,
            currentCarerStep: currentCarerStep
        })
    }

    previousButton() {
        let currentParticipantStep = this.state.currentParticipantStep
        let currentCarerStep = this.state.currentCarerStep
        if (currentParticipantStep !== 1 || currentCarerStep !== 1) {
            return (
                <Button
                    className="previous-button"
                    variant="outlined"
                    type="button" onClick={this._prev}>
                    Previous
                </Button>
            )
        }
        return null;
    }

    nextButton() {
        let currentParticipantStep = this.state.currentParticipantStep
        let currentCarerStep = this.state.currentCarerStep
        console.log(this.state.user.role)
        if (currentCarerStep < 10 && this.state.user.role === "Carer" ||
            currentParticipantStep < 8 && this.state.user.role === "Participant") {
            return (
                <Button
                    className="next-button"
                    color="primary"
                    variant="contained"
                    type="button" onClick={this._next}>
                    Next
                </Button>
            )
        }
        return (
            <Button
                className="next-button"
                color="primary"
                variant="contained"
                type="button" onClick={this.handleSubmit}>
                Submit
            </Button>
        )
    }
    handleChange(event) {
        const { user } = this.state;
        const {currentCarerStep, currentParticipantStep} = this.state
        const currentState = user;
        const { name, value } = event.target;
        currentState[name] = value;

        if (currentCarerStep === 3 || currentParticipantStep === 3) {
            this.setState({ 
                user: {
                    ...this.state.user, 
                    address : {
                        ...this.state.user.address,
                        [name]: value
                    }
                }
            })
        } else {
            this.setState({ 
                user: currentState 
            });
        }  
    }

   
    handleFileSelect = event => {
        this.setState({ 
            user: {
                ...this.state.user,
                profile_picture: event.target.files[0]
            }
        })
        console.log(this.state.user.profile_picture)
        this.previewFile(this.state.user.profile_picture)
    }

    previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            this.setState({
                previewSource: reader.result
            })
        }
    }

    handleCheckBoxChange = event => {
        console.log(event.target.id)
        let array = [...this.state.user.categories]
        let index = array.indexOf(event.target.value)
        console.log("index", index)
        const { user } = { ...this.state };
        const currentState = user;
        const { name, value } = event.target;
        if (event.target.checked) {
            array = [
                ...this.state.user.categories, 
                {name: event.target.name, id: event.target.id}];
        }
        else {
                array.splice(index, 1);
                this.setState({
                    ...this.state.user, array
                });
        }

        currentState.categories = array

        this.setState({
            user: currentState
        });
    }


    // handleRadioChange(event) {
    //     const valueToBool = this.str2bool(event.target.value)
    //     console.log("Val: ", valueToBool, typeof valueToBool);
    //     const { user } = { ...this.state };
    //     const currentState = user;
    //     const { name, value } = event.target;
    //     currentState[name] = valueToBool;
    //     console.log(name, ",",currentState[name], typeof currentState[name])
    //     this.setState({ user: currentState });
    //     console.log("role", typeof this.state.user.role )
    // }


    returnToEditPage() {
        if (this.state.role === "Carer") {
            this.setState({
                currentCarerStep: this.state.editStep,
            })
        }
        else {
            this.setState({
                currentParticipantStep: this.state.editStep,
            })  
        }
    }

    render() {
        const { user } = this.state;


        return (
            <Container>
                <h1>Sign Up Form</h1>

                <h2>Step {this.state.user.role === "Carer" ? this.state.currentCarerStep : this.state.currentParticipantStep} </h2>

                <form onSubmit={this.handleSubmit}>
                    {/* 
                    render the form steps and pass required props in
                    */}
                    <Step1UserType
                        currentParticipantStep={this.state.currentParticipantStep}
                        currentCarerStep={this.state.currentCarerStep}
                        handleChange={this.handleChange}
                        stateValues={user}
                    />
                    <Step2PersonalDetails
                        currentParticipantStep={this.state.currentParticipantStep}
                        currentCarerStep={this.state.currentCarerStep}
                        handleChange={this.handleChange}
                        handleFileSelect={this.handleFileSelect}
                        fileUploadState={this.state}
                        stateValues={user}
                    />
                    <Step3Address
                        currentParticipantStep={this.state.currentParticipantStep}
                        currentCarerStep={this.state.currentCarerStep}
                        handleChange={this.handleChange}
                        stateValues={user}
                    />
                    <Step4SupportCategoryDetails
                        currentParticipantStep=
                        {this.state.currentParticipantStep}
                        currentCarerStep={this.state.currentCarerStep}
                        handleCheckBoxChange={this.handleCheckBoxChange}
                        stateValues={user}
                    />
                    <Step5Hours
                        currentParticipantStep={this.state.currentParticipantStep}
                        currentCarerStep={this.state.currentCarerStep}
                        handleChange={this.handleChange}
                        stateValues={user}
                    />
                    {this.state.user.role === "Carer" ?
                        <>
                            <Step6CarerVerification
                                currentCarerStep={this.state.currentCarerStep}
                                handleChange={this.handleChange}
                                stateValues={user}
                            />
                            <Step7FirstAid
                                currentCarerStep={this.state.currentCarerStep}
                                handleChange={this.handleChange}
                                stateValues={user}
                            />
                            <Step8HourlyRate
                                currentCarerStep={this.state.currentCarerStep}
                                handleChange={this.handleChange}
                                stateValues={user}
                            />
                            <Step9Vehicle
                                currentCarerStep={this.state.currentCarerStep}
                                handleChange={this.handleChange}
                                stateValues={user}
                            />
                        </>
                        :
                        <>
                            <Step6DisabilityDetails
                                currentParticipantStep={this.state.currentParticipantStep}
                                handleChange={this.handleChange}
                                stateValues={user}
                            />
                            <Step7NDISNumber
                                currentParticipantStep={this.state.currentParticipantStep}
                                handleChange={this.handleChange}
                                stateValues={user}
                            />
                        </>
                    }
                    <ReviewStep 
                        stateValues={user}
                        returnToEditPage={this.returnToEditPage}
                        currentCarerStep={this.state.currentCarerStep}
                        currentParticipantStep={this.state.currentParticipantStep}/>

                    {this.previousButton()}
                    {this.nextButton()}
                </form>
            </Container>
        )
    }
}

  const mapStateToProps = state => {
    return {
      userData: state.user
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      getCurrentUser: (user) => dispatch(getCurrentUser(user))
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Registration)
  
