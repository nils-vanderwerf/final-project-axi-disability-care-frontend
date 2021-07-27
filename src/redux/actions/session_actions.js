import { GET_CURRENT_USER, LOGOUT_CURRENT_USER } from "../userTypes";

export const getCurrentUser = user => ({
  type: GET_CURRENT_USER,
  payload: user
});


export const logout = (user) => {
  return {
    type: LOGOUT_CURRENT_USER,
    payload: user
  }
}
