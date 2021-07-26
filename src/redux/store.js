import { createStore, applyMiddleware, combineReducers} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";
// import currentUser from "./reducers/currentUser";
// import loginForm from "./reducers/loginForm";
// import tasks from "./reducers/tasks";
// import signUpForm from "./reducers/signUpForm";
import fetchCarerReducer from './users/fetchCarers/fetchCarersReducer'
import currentUserReducer from "./users/currentUser/currentUserReducer";
import logger from 'redux-logger'

const rootReducer = combineReducers({
  carer: fetchCarerReducer, //list of carers
  user: currentUserReducer //current user
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
)

export default store;