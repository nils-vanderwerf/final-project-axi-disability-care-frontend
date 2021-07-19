// // import { CREATE_USER } from "../UserTypes";
// // import { CREATE_USER_ERROR } from "../UserTypes";

// export const createUser = (credentials, history) => {
// 	return dispatch => {
// 		const userInfo = {
// 			user: credentials
// 		  };
// 	return axios('http://localhost:3001/api/v1/registrations', {
// 		userInfo
// 	},
// 		{ withCredentials: true }
// 	).
// 		then(response => {
// 			console.log(response)
// 		})
// 		.catch(error => {
// 			console.log("registration error", error)
// 		})
//   };
// }

//   // syncrhonous action creators - state is updated immediately
// export const updateSignupForm = formData => {
// 	return {
// 	  type: "UPDATE_SIGNUP_FORM",
// 	  formData
// 	};
//   };
  
//   export const resetSignupForm = () => {
// 	return {
// 	  type: "RESET_SIGNUP_FORM"
// 	  // No payload required because form is being reset
// 	};
//   };
  
// //   handleSubmit(event) {
// // 	const { user } = { ...this.state };
// // 	event.preventDefault()
// // 	axios.post('http://localhost:3001/api/v1/registrations', {
// // 		user: user
// // 	},
// // 		{ withCredentials: true }
// // 	).
// // 		then(response => {
// // 		if (response.data.status === 'created') {
// // 			this.props.handleSuccessfulAuth(response.data);
// // 		}
// // 	})
// // 	.catch(error => {
// // 		console.log("registration error", error)
// // 	})
// // }
