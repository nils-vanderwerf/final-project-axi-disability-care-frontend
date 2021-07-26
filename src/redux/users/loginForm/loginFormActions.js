import axios from 'axios'
import { setCurrentUser } from '../currentUser/currentUserActions';
import {
    UPDATE_LOGIN_FORM,
    RESET_LOGIN_FORM
} from '../userTypes'

// syncrhonous action creators - state is updated immediately
export const updateLoginForm = formData => {
    return {
        type: UPDATE_LOGIN_FORM,
        formData
    };
};

export const resetLoginForm = () => {
    return {
        type: RESET_LOGIN_FORM
    };
};

    // asynchronous action creators -- requests to the backend are required first
    export const login = (credentials) => {
        // console.log("here are the creds", credentials);
        return (dispatch) => {
            dispatch(login())
            axios.post("http://localhost:3001/api/v1/login",
                { withCredentials: true }
            )
            .then(user => {
                dispatch(setCurrentUser(user)); // dispatch action creator
            })
            .catch(error => {
                console.log(error)
            });
        };
      };


