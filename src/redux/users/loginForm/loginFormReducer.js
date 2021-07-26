
import {
  UPDATE_LOGIN_FORM,
  RESET_LOGIN_FORM
} from '../userTypes'

const initialState = {
    email: "",
    password: ""
  };
  
    const loginFormReducer = (state = initialState, action) => {
    console.log("entered")
    switch (action.type) {
      case UPDATE_LOGIN_FORM:
        return action.formData;
      case RESET_LOGIN_FORM:
        return initialState;
      default:
        return state;
    }
  };

  export default loginFormReducer;

