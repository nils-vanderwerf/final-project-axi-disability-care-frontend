const initialState = {
    role: "carer",
    first_name: "",
    last_name: "",
    bio: "",
    age: "",
    gender: "",
    area: {
        city: "",
        state: "",
        zip_code: "",
    },
    email: "",
    hours_of_work: 15,
    categories: [],
    hourly_rate: 50,
    first_aid_training: 'false',
    carer_number: null,
    has_vehicle: 'false',
    disability: '',
    ndis: 'true',
    ndis_number: null,
    password: "",
    password_confirmation: ""
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_SIGNUP_FORM":
        return action.formData;
      case "RESET_SIGNUP_FORM":
        return initialState;
      default:
        return state;
    }
  };
  