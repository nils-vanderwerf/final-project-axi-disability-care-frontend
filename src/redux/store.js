import { createStore, applyMiddleware, combineReducers} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";
// import currentUser from "./reducers/currentUser";
// import loginForm from "./reducers/loginForm";
// import tasks from "./reducers/tasks";
// import signUpForm from "./reducers/signUpForm";
import fetchCarerReducer from './users/fetchCarers/fetchCarerReducer'
import createUserReducer from "./users/auth/createUserReducer";
import logger from 'redux-logger'

const rootReducer = combineReducers({
  carer: fetchCarerReducer
  // newUser: createUserReducer
  // users, //* stretch goal to add user page
  // categories
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
)

export default store;