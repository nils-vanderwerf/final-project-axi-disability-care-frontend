import { GET_CURRENT_USER, LOGOUT_CURRENT_USER } from "../userTypes"

const initialState = {
    user: {},
    logged_in: false
}

const currentUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CURRENT_USER:
            return {
                ...state,
                user: action.payload
            }
        case LOGOUT_CURRENT_USER:
            return {
                ...state,
                user: {},
            }
        default:
            return state;
    }
}

export default currentUserReducer