// // import {authApi} from '../api/Api-service';
//
// const SET_USER_DATA = 'SET-USER-DATA'
//
// const initialState = {
//   userId: null,
//   email: null,
//   login: null,
//   isAuth: false
// }
//
//
// const authReduser = (state = initialState, action) => {
//
//   switch (action.type) {
//     case SET_USER_DATA:
//       return {
//         ...state,
//         ...action.payload,
//         // isAuth: true
//       }
//
//     default:
//       return state
//   }
// }
//
// export const setAuthUserData = (userId, email, login, isAuth) => ({
//   type: SET_USER_DATA,
//   payload: {userId, email, login, isAuth}
// })
//
// //thunkcreators (thunk - функция принимает dispatch)
//
// export const authUser = () => {
//   return (dispatch) => {
//     authApi.authUser()
//       .then((data) => {
//         if (data.resultCode === 0) {
//           const {id, email, login} = data.data
//           dispatch(setAuthUserData(id, email, login, true))
//         }
//       })
//   }
// }
//
// export const logIn = (email, password, rememberMe) => {
//   return (dispatch) => {
//     authApi.logIn(email, password, rememberMe)
//       .then((data) => {
//         if (data.resultCode === 0) {
//           console.log('you are logged in')
//           dispatch(authUser())
//         }
//       })
//   }
// }
//
// export const logOut = () => {
//   return (dispatch) => {
//     authApi.logOut()
//       .then((data) => {
//         console.log('data',data)
//         if (data.resultCode === 0) {
//           console.log('you are logged out')
//           dispatch(setAuthUserData(null, null, null, false))
//         }
//       })
//   }
// }
//
//
// export default authReduser