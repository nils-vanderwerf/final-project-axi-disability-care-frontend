
import {
    FETCH_CARERS_REQUEST,
    FETCH_CARERS_SUCCESS,
    FETCH_CARERS_FAILURE
  } from '../userTypes'
  
  const initialState = {
    loading: false,
    carers: [],
    error: ''
  }
  
  const fetchCarerReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CARERS_REQUEST:
        return {
          ...state, //retuyn new state object by makig a copy of existing state, set loadint to true
          loading: true
        }
      case FETCH_CARERS_SUCCESS:
        return {
          loading: false,
          carers: action.payload,
          error: ''
        }
      case FETCH_CARERS_FAILURE:
        return {
          loading: false,
          carers: [],
          error: action.payload
        }
      default: return state
    }
  }
  
  export default fetchCarerReducer
  