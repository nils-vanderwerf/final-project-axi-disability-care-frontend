import {GET_CURRENT_USER, LOGOUT_CURRENT_USER} from '../userTypes'

export const getCurrentUser = (user) => {
    return {
        type: GET_CURRENT_USER,
        payload: user
    }
}

export const logoutCurrentUser = (logged_in) => {
    return {
        type: LOGOUT_CURRENT_USER,
        payload: logged_in
    }
}

// export const getCurrentUser = () => {
//     return (dispatch) => {
//       return axios
//       .get('http://localhost:3001/api/v1/get_current_user')
//       .then(response => {
//         // response.data is the users
        
//         const users = response.data
//         dispatch(getUsersSuccess(data))
//         })
//         .then(res => res.json())
//         .then(user => 
//            console.log(user)
//           }
//         })
//         .catch(console.log);
//     };
//   };

//   export const fetchCarers = () => {
//     return (dispatch) => {
//       dispatch(fetchCarersRequest())
//       axios
//         .get('http://localhost:3001/api/v1/users')
//         .then(response => {
//           // response.data is the users
          
//           const carers = response.data
//           dispatch(fetchCarersSuccess(carers))
//         })
//         .catch(error => {
//           // error.message is the error message
//           dispatch(fetchCarersFailure(error.message))
//         })
//     }
//   }