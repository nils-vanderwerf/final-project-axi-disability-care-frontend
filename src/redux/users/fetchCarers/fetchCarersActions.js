import axios from 'axios'
import {
  FETCH_CARERS_REQUEST,
  FETCH_CARERS_SUCCESS,
  FETCH_CARERS_FAILURE
} from '../userTypes'

export const fetchCarers = () => {
  return (dispatch) => {
    dispatch(fetchCarersRequest())
    axios
      .get('http://localhost:3001/api/v1/users')
      .then(response => {
        // response.data is the users
        
        const carers = response.data
        dispatch(fetchCarersSuccess(carers))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchCarersFailure(error.message))
      })
  }
}

export const fetchCarersRequest = () => {
  return {
    type: FETCH_CARERS_REQUEST
  }
}

export const fetchCarersSuccess = carers => {
  return {
    type: FETCH_CARERS_SUCCESS,
    payload: carers
  }
}

export const fetchCarersFailure = error => {
  return {
    type: FETCH_CARERS_FAILURE,
    payload: error
  }
}

