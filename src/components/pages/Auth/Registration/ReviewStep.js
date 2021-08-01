import React, { Component } from 'react'
import { List, ListItem, Container } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { render } from '@testing-library/react';
import CategoryItem from '../../Categories/CategoryItem';

//capitalize, remove underscores
function humanize(str) {
    console.log(str)
    let i, frags = str.split('_');
    for (i=0; i<frags.length; i++) {
      frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
    }
    return frags.join(' ');
  }
class ReviewStep extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { stateValues, currentCarerStep, currentParticipantStep } = this.props

        if ((currentCarerStep !== 10 && stateValues.role == "Carer")
            || (currentParticipantStep !== 8 && stateValues.role == "Participant")) {
            return null
        }
        return (
            <Container>
                <h3>Review</h3>
                <p>Please review your answers before submission</p>
                <ul>
                    <li class="review-item">
                        <p><strong>User Type: </strong>{stateValues.role}</p>
                    </li>
                    <li class="review-item">
                        <p><strong>First Name: </strong>{stateValues.first_name}</p>
                    </li>
                    <li class="review-item">
                        <p><strong>Last Name: </strong>{stateValues.last_name}</p>
                    </li>
                    <li class="review-item">
                        <p><strong>Email: </strong> {stateValues.email}</p>
                    </li>
                    <li class="review-item">
                        <p><strong>Bio: </strong>{stateValues.bio}</p>
                    </li>
                    <li class="review-item">
                        <p><strong>Age: </strong>{stateValues.age}</p>
                    </li>
                    <li class="review-item">
                        <p><strong>Gender: </strong>{stateValues.gender}</p>
                    </li>
                    <li class="review-item">
                        <p><strong>City: </strong>{stateValues.city}</p>
                    </li>
                    <li class="review-item">
                        <p><strong>State: </strong>{stateValues.state}</p>
                    </li>
                    <li class="review-item">
                        <p><strong>Zip Code: </strong>{stateValues.zip_code}</p>
                    </li>

                    {stateValues.role === "Carer" ?

                        <li class="review-item">
                            <p><strong>Preferred number of hours of work: </strong>{stateValues.hours_of_work}</p>
                        </li>
                        :
                        <li class="review-item">
                            <p><strong>Preferred number of hours with your support worker: </strong>{stateValues.hours_of_work}</p>
                        </li>
                    }

                    <li class="review-item">
                        <p><strong>Support categories:</strong></p>
                        <ul>
                        {stateValues.categories ? 
                            stateValues.categories.map((category) => {
                                return (
                                <li className="support-category">
                                    {humanize(category.name)}
                                </li>
                                )
                            }) 
                            : 
                            null 
                            }
                        </ul>
                    </li>

                    {stateValues.role === "Carer" ?
                        <>
                            <li class="review-item">
                                <p><strong>Hourly rate: </strong>{stateValues.hourly_rate}</p>
                            </li>
                            <li class="review-item">
                                <p><strong>First Aid Training: </strong> {stateValues.first_aid_training === 'true' ? "Yes" : "No"} </p>
                            </li>
                            <li class="review-item">
                                <p><strong>Has Vehicle: </strong>{stateValues.has_vehicle === 'true' ? "Yes" : "No"}</p>
                            </li>
                            <li class="review-item">
                                <p><strong>Carer Number: </strong>{stateValues.carer_number}</p>
                            </li>
                        </>
                        :
                        <>
                            <li class="review-item">
                                <p><strong>Disability: </strong>{stateValues.disability}</p>
                            </li>
                            <li class="review-item">
                                <p><strong>Are you using NDIS funding for your services: </strong>{stateValues.ndis === 'true' ? "Yes" : "No"}</p>
                            </li>
                            <li class="review-item">
                                <p><strong>NDIS Number: </strong>{stateValues.carer_number}</p>
                            </li>
                        </>
                    }
                </ul>
            </Container>
        )
    }
}

export default ReviewStep;
