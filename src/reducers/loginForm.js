const initialState = {
    is_carer: false,
    first_name: "",
    last_name: "",
    bio: "",
    age: "",
    gender: "",
    zip_code: 2000,
    has_vehicle: false,
    email: "",
    first_aid_training: false,
    background_check: false,
    hourly_rate: 50,
    password: "",
    password_confirmation: ""
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_LOGIN_FORM":
      return action.formData;
    case "RESET_LOGIN_FORM":
      return initialState;
    default:
      return state;
  }
};
