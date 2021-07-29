import {
    SET_CURRENT_USER,
    GET_CURRENT_USER,
    LOGOUT_CURRENT_USER
}
    from "../userTypes"
const initialState = {
    user: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                user: action.payload
            }
        case LOGOUT_CURRENT_USER:
            return {
                ...state,
                user: null,
            }
        default:
            return state;
    }
}

export default userReducer