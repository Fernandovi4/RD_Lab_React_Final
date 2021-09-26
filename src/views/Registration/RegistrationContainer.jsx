import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { setCurrentUserData } from '../../store/authSlice'
import { registerNewUser } from '../../services/firebaseAuth/register_FireBase_Service'
import Registration from './Registration'

const RegistrationContainer = (props) => {


  const [isRegistered, setIsRegistered] = useState(null)

  const onFormSubmit = async (registrationData) => {

    const { email, password, rememberMe } = registrationData

    let user = await registerNewUser(email, password)

    if (user) {
      setCurrentUserData(user.uid, email, rememberMe)
      setIsRegistered(true)
    }
  }

  return (isRegistered) ?
    <Redirect to="/login" /> :
    <Registration {...props} onFormSubmit={onFormSubmit} />

}

export default RegistrationContainer