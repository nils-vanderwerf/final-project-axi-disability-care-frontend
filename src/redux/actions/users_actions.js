import axios from 'axios'
import {
  FETCH_CARERS_REQUEST,
  FETCH_CARERS_SUCCESS,
  FETCH_CARERS_FAILURE
} from '../userTypes'

const fetchCarers = () => {
    console.log("Fetch carers action")
    return (dispatch) => {
        axios.get('http://localhost:3001/api/v1/users')
        .then(response => {
            console.log('response', response)
            // response.data is the users
            const carers = response.data
            const action = fetchCarersSuccess(carers)
            console.log("Fetch carers success action:", action)
            dispatch(action)
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

export default fetchCarers;

