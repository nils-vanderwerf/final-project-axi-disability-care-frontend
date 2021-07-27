import { createStore, applyMiddleware, combineReducers} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";
// import currentUser from "./reducers/currentUser";
// import loginForm from "./reducers/loginForm";
// import tasks from "./reducers/tasks";
// import signUpForm from "./reducers/signUpForm";
import fetchCarerReducer from '../redux/reducers/users_reducer'
import logger from 'redux-logger'
import { currentUserReducer } from "./reducers/users_reducer";
import userReducer from "./reducers/sessions_reducer";


const rootReducer = combineReducers({
  carer: fetchCarerReducer, //list of carers
  user: userReducer //current user
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
)

export default store;