import axios from 'axios'
const initialState = {
  user: {}
}

  // syncrhonous action creators - state is updated immediately
export const setCurrentUser = user => {
  console.log(user);
  return {
    type: "SET_CURRENT_USER", // matches the case in the reducer
    user // shorthand version of payload: user
  };
};

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  };
};



