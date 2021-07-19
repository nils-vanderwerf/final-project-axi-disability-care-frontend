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
import { string } from 'prop-types';


class Registration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentCarerStep: 1,
            currentParticipantStep: 1,
            user: {
                user_type: "carer",
                first_name: "",
                last_name: "",
                bio: "",
                age: "",
                gender: "",
                address: {
                    city: '',
                    state: '',
                    zip_code: ''
                },
                email: "",
                hours_of_work: 15,
                support_categories: [],
                carer: {
                    hourly_rate: 50,
                    first_aid_training: 'false',
                    carer_number: 111111111,
                    has_vehicle: 'false'
                },
                participant: {
                    disability: '',
                    ndis: 'true',
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
        this.handleAddressChange = this.handleAddressChange.bind(this);
        // this.handleRadioChange = this.handleRadioChange.bind(this);
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


    _next = () => {
        let currentParticipantStep = this.state.currentParticipantStep
        let currentCarerStep = this.state.currentCarerStep
        if (currentCarerStep < 9){
            console.log(this.state.user.user_type)
            this.setState({
                currentCarerStep: currentCarerStep + 1
            })
        } 
        if (currentParticipantStep < 7) {
            console.log(!this.state.user.user_type)
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
    if(currentParticipantStep !==1 && currentCarerStep !== 1 ){
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
        console.log(this.state.user.user_type)
        if(currentCarerStep < 9 && this.state.user.user_type === "carer" || 
            currentParticipantStep < 7 && this.state.user.user_type === "participant" ){
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
    handleChange(event) {
        const { user } = { ...this.state };
        const currentState = user;
        const { name, value } = event.target;
        currentState[name] = value;
      
        this.setState({ user: currentState });
    }

    handleCheckboxChange = event => {
        
        let newArray = [...this.state.support_categories, event.target.name];
        if (this.state.support_categories.includes(event.target.name)) {
            newArray = newArray.filter
            (category => category !== event.target.name);
        }
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
    //     console.log("user_type", typeof this.state.user.user_type )
    // }

    //  str2bool = (value) => {
    //     if (value && typeof value === "string") {
    //          if (value.toLowerCase() === "true") return true;
    //          if (value.toLowerCase() === "false") return false;
    //     }
    //     return value;
    //  }


    handleAddressChange = (event) => {
        const { address } = { ...this.state.user };
        console.log(address)
        const currentState = address;
        const { name, value } = event.target;
        currentState[name] = value;
        
        this.setState({ address: currentState });
      };

    render() {
        const { user } = this.state;
        const { address } = this.state.user
        const { carer } = this.state.user
        const { participant } = this.state.user

        return (
            <Container>
                <h1>Sign Up Form</h1>
                
                <h2>Step {this.state.user.user_type === "true" ? this.state.currentCarerStep : this.state.currentParticipantStep} </h2> 
        
                <form onSubmit={this.handleSubmit}>
                    {/* 
                    render the form steps and pass required props in
                    */}
                    <Step1UserType
                        currentParticipantStep ={this.state.currentParticipantStep}
                        currentCarerStep ={this.state.currentCarerStep} 
                        handleChange={this.handleChange}
                        handleRadioChange={this.handleRadioChange}
                        stateValues={user}
                    />
                    <Step2PersonalDetails 
                        currentParticipantStep ={this.state.currentParticipantStep}
                        currentCarerStep ={this.state.currentCarerStep}  
                        handleChange={this.handleChange}
                        stateValues={user}
                    />
                    <Step3Address 
                        currentParticipantStep ={this.state.currentParticipantStep}
                        currentCarerStep ={this.state.currentCarerStep}  
                        handleAddressChange={this.handleAddressChange}
                        
                        stateValues={user}
                    />
                    <Step4SupportCategoryDetails
                        currentParticipantStep ={this.state.currentParticipantStep}
                        currentCarerStep ={this.state.currentCarerStep}   
                        handleChange={this.handleChange}
                        stateValues={user}
                    />
                    <Step5Hours
                        currentParticipantStep ={this.state.currentParticipantStep}
                        currentCarerStep ={this.state.currentCarerStep}  
                        handleChange={this.handleChange}
                        stateValues={user}
                    />
                    {this.state.user.user_type === "carer" ?
                        <>
                            <Step6CarerVerification                     
                                currentCarerStep ={this.state.currentCarerStep}  
                                handleChange={this.handleChange}
                                stateValues={carer}
                            />
                            <Step7FirstAid
                                currentCarerStep ={this.state.currentCarerStep}  
                                handleChange={this.handleChange}
                                
                                stateValues={carer}
                            />
                            <Step8HourlyRate
                                currentCarerStep ={this.state.currentCarerStep}  
                                handleChange={this.handleChange}
                                
                                stateValues={carer}
                            />
                            <Step9Vehicle
                                currentCarerStep ={this.state.currentCarerStep}  
                                handleChange={this.handleRadioChange}
                                stateValues={carer}
                            />
                        </>
                        :
                        <>
                            <Step6DisabilityDetails
                                currentParticipantStep ={this.state.currentParticipantStep} 
                                handleChange={this.handleChange}
                                
                                stateValues={participant}
                            />
                            <Step7NDISNumber
                                currentParticipantStep ={this.state.currentParticipantStep} 
                                handleChange={this.handleChange}
                                
                                stateValues={participant}
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
