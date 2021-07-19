import axios from 'axios';
import React, { Component } from 'react'
import { Container, FormControl, FormGroup, InputLabel, TextField, Button, RadioGroup, Radio, FormControlLabel } from '@material-ui/core';
import { connect } from 'react-redux';
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


class Registration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentStep: 1,
            user: {
                is_carer: false,
                first_name: "",
                last_name: "",
                bio: "",
                age: "",
                gender: "",
                address: {

                },
                has_vehicle: false,
                email: "",
                hours_of_work: 15,
                support_categories: [],
                carer: {
                    hourly_rate: 50,
                    first_aid_training: false,
                    carer_number: 111111111
                },
                participant: {
                    disability: '',
                    ndis: true,
                    ndis_number: 111111111
                },
                password: "",
                password_confirmation: ""
            },
            registrationErrors: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
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

    _next = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 2? 3: currentStep + 1
        this.setState({
          currentStep: currentStep
        })
    }
        
    _prev = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1? 1: currentStep - 1
        this.setState({
            currentStep: currentStep
        })
    }

    previousButton() {
    let currentStep = this.state.currentStep;
    if(currentStep !==1){
        return (
        <Button
            className="previous-button" 
            type="button" onClick={this._prev}>
        Previous
        </Button>
        )
    }
    return null;
    }
    
    nextButton() {
    let currentStep = this.state.currentStep;
        console.log(this.state.user.is_carer)
        if(currentStep < 9 && this.state.user.is_carer || 
            currentStep < 7 && !this.state.user.is_carer ){
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
    return null;
    }
    
    handleCheckboxChange = event => {
    let newArray = [...this.state.support_categories, event.target.name];
        if (this.state.support_categories.includes(event.target.name)) {
            newArray = newArray.filter
            (category => category !== event.target.name);
        }
    }

    render() {
        const { user } = this.state;
        const { carer } = this.state.user
        const { participant } = this.state.user
        return (
            <Container>
                <h1>Sign Up Form</h1>
                <h2>Step {this.state.currentStep} </h2> 
        
                <form onSubmit={this.handleSubmit}>
                    {/* 
                    render the form steps and pass required props in
                    */}
                    <Step1UserType
                        currentStep={this.state.currentStep} 
                        handleChange={this.handleChange}
                        value={user}
                    />
                    <Step2PersonalDetails 
                        currentStep={this.state.currentStep} 
                        handleChange={this.handleChange}
                        value={user}
                    />
                    <Step3Address 
                        currentStep={this.state.currentStep} 
                        handleChange={this.handleChange}
                        value={user}
                    />
                    <Step4SupportCategoryDetails
                        currentStep={this.state.currentStep} 
                        handleChange={this.handleChange}
                        value={user}
                    />
                    <Step5Hours
                        currentStep={this.state.currentStep} 
                        handleChange={this.handleChange}
                        value={user}
                    />
                    {this.state.user.is_carer === true ?
                        <>
                            <Step6CarerVerification                     
                                currentStep={this.state.currentStep} 
                                handleChange={this.handleChange}
                                value={carer}
                            />
                            <Step7FirstAid
                                currentStep={this.state.currentStep} 
                                handleChange={this.handleChange}
                                
                                value={carer}
                            />
                            <Step8HourlyRate
                                currentStep={this.state.currentStep} 
                                handleChange={this.handleChange}
                                
                                value={carer}
                            />
                            <Step9Vehicle
                                currentStep={this.state.currentStep} 
                                handleChange={this.handleRadioChange}
                                value={carer}
                            />
                        </>
                        :
                        <>
                            <Step6DisabilityDetails
                                currentStep={this.state.currentStep} 
                                handleChange={this.handleChange}
                                
                                value={participant}
                            />
                            <Step7NDISNumber
                                currentStep={this.state.currentStep} 
                                handleChange={this.handleChange}
                                
                                value={participant}
                            />
                        </>
                    }

                    {this.previousButton()}
                    {this.nextButton()}
                </form>
            </Container>
        )
    }
}

export default Registration
