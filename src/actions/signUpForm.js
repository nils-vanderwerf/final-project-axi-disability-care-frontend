// syncrhonous action creators - state is updated immediately
export const updateSignupForm = formData => {
    return {
      type: "UPDATE_SIGNUP_FORM",
      formData
    };
  };