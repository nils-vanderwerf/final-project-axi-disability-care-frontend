import { createStore, applyMiddleware, combineReducers} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";
// import currentUser from "./reducers/currentUser";
// import loginForm from "./reducers/loginForm";
// import tasks from "./reducers/tasks";
// import signUpForm from "./reducers/signUpForm";
import fetchCarerReducer from './users/fetchCarers/fetchCarersReducer'
import logger from 'redux-logger'
import currentUser from "./users/currentUser/currentUser";
import { currentUserReducer } from "./users/currentUser/currentUser";
import loginFormReducer from "./users/loginForm/loginFormReducer";


const rootReducer = combineReducers({
  carer: fetchCarerReducer, //list of carers
  user: currentUserReducer, //current user
  loginForm: loginFormReducer 
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
)

export default store;