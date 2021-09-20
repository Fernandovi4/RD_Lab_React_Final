import React from 'react'
import Login from './Login'

const LoginContainer = (props) => {

  const onFormSubmit = (loginData) => {
    console.log(loginData)
  }

  return <Login {...props} onFormSubmit={onFormSubmit}/>
}

export default LoginContainer