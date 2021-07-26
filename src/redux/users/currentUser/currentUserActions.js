import {LOGOUT_CURRENT_USER} from '../userTypes'
import axios from 'axios'

export const setCurrentUser = user => {
    console.log(user);
    return {
      type: "SET_CURRENT_USER", // matches the case in the reducer
      user // shorthand version of payload: user
    };
}

export const getCurrentUser = () => {
    return dispatch => {
        axios
        .get("http://localhost:3001/api/v1/get_current_user", 
            { withCredentials: true }
        )
        .then(user => {
            dispatch(setCurrentUser(user));
          }
        )
        .catch(error => console.log(error));
    };
  };

    // asynchronous action creators -- requests to the backend are required first
    export const login = () => {
        // console.log("here are the creds", credentials);
        return (dispatch) => {
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

    export const logout = (user) => {
        return {
            type: LOGOUT_CURRENT_USER,
            payload: user
        }
    }


