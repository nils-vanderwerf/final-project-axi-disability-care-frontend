// import axios from "axios";

// export const getCurrentUser = () => {
//       axios.get("http://localhost:3001/api/v1/get_current_user", { withCredentials: true })
//       .then(user => {
//         console.log(user)
//       })
//       .catch(error => {
//         console.log("catch login error", error);
//       });
// };

//   export const clearCurrentUser = () => {
//     return {
//       type: "CLEAR_CURRENT_USER"
//     };
//   };


// export const logout = () => {
//     return dispatch => {
//       dispatch(clearCurrentUser()); // dispatch clears the front end, fetch clears the back end (logout route)
//       // dispatch(clearAllUsers());
//       return   axios
//       .delete("http://localhost:3001/logout", { withCredentials: true })
//       .then(response => {
//           this.props.handleLogout();
//       })
//       .catch(error => {
//           console.log("logout error", error)
//       })
//     };
//   };
  
//   export const signup = (credentials, history) => {
//     return dispatch => {
//       const userInfo = {
//         user: credentials
//       };
//       return axios.post('http://localhost:3001/api/v1/registrations', {
//         user: user
//     },
//         { withCredentials: true }
//     ).
//         then(response => {
//         if (response.data.status === 'created') {
//             this.props.handleSuccessfulAuth(response.data);
//         }
//     })
//     .catch(error => {
//         console.log("registration error", error)
//     })
//   }
// }