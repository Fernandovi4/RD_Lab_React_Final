import React from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentUserData } from '../../store/authSlice'
import { logIn_FireBase_Servise } from '../../services/firebaseAuth/logIn_FireBase_Servise'
import Login from './Login'
import { setCurrentUserId } from '../../store/currentUserSlice'

const LoginContainer = (props) => {

  const isAuth = useSelector((state) => state.auth.isAuth)
  const dispatch = useDispatch()

  const onFormSubmit = async (loginData) => {

    const { email, password, rememberMe } = loginData
    const user = await logIn_FireBase_Servise(email, password)

    if (user) {
      const userId = user.uid
      dispatch(setCurrentUserData({ userId, email, rememberMe, isAuth: true }))
      dispatch(setCurrentUserId(userId))
    }
  }

  return (isAuth) ?
    <Redirect to="/" /> :
    <Login {...props} onFormSubmit={onFormSubmit} />

}

export default LoginContainer