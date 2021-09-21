import React from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentUserData } from '../../../redux/authSlice'
import { logInFb } from '../../../firebase/logInFb'
import Login from './Login'


const LoginContainer = (props) => {

  const isAuth = useSelector((state) => state.auth.isAuth)
  const dispatch = useDispatch()

  const onFormSubmit = async (loginData) => {

    const { email,password, rememberMe } = loginData
    const user = await logInFb(email, password)

    if (user) {
      const userId = user.uid
      dispatch(setCurrentUserData({ userId, email, rememberMe,isAuth: true }))
    }

  }

  return (isAuth) ?
    <Redirect to="/" /> :
    <Login {...props} onFormSubmit={onFormSubmit} />
  
}

export default LoginContainer