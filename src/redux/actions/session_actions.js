import axios from 'axios'
import {
  SET_CURRENT_USER,
  LOGOUT_CURRENT_USER, 
  GET_CURRENT_USER} from "../userTypes";



export const getCurrentUser = () => {
  return dispatch => {     //nameless functions
    // Initial action dispatched
    //return axios call
   return axios
    .get('http://localhost:3001/api/v1/get_current_user')
    .then
    (user => 
      console.log("User in get current users, redux", user)
    )
    .catch (error => 
      console.log("get users error: ", error)
    )
  }
}

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
});


export const logout = (user) => {
  return {
    type: LOGOUT_CURRENT_USER,
    payload: null
  }
}
