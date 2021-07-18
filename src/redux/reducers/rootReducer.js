import { combineReducers } from "redux";
import userReducer from "../users/userReducer";
// import /* ReducerName */ from /*path*/

const rootReducer = combineReducers({
    user: userReducer
    // category: categoryReducers
    // taskReducer: taskReducer

})

export default rootReducer;