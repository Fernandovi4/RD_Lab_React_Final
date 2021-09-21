import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { setCurrentUserData } from '../../../redux/authSlice'
import { registerNewUser } from '../../../firebase/regNewUser'
import Registration from './Registration'

const RegistrationContainer = (props) => {


  const [isRegistrated, setIsRegistrated] = useState(null)

  const onFormSubmit = async (registrationData) => {

    const { email, password, rememberMe } = registrationData

    let user = await registerNewUser(email, password)

    if (user) {
      setCurrentUserData(user.uid, email, rememberMe)
      setIsRegistrated(true)
    }
  }

  return (isRegistrated) ?
    <Redirect to="/login" /> :
    <Registration {...props} onFormSubmit={onFormSubmit} />

}

export default RegistrationContainer