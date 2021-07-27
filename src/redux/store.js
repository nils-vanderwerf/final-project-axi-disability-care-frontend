import { createStore, applyMiddleware, combineReducers} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
// import currentUser from "./reducers/currentUser";
// import loginForm from "./reducers/loginForm";
// import tasks from "./reducers/tasks";
// import signUpForm from "./reducers/signUpForm";
import fetchCarersReducer from '../redux/reducers/users_reducer'
import userReducer from "./reducers/sessions_reducer";
import logger from 'redux-logger'
import thunk from "redux-thunk";
import { currentUserReducer } from "./reducers/users_reducer";



const rootReducer = combineReducers({
  carers: fetchCarersReducer, //list of carers
  user: userReducer //current user
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
)

export default store;