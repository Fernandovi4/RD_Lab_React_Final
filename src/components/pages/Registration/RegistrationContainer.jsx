import React from 'react'
import Registration from './Registration'

const RegistrationContainer = (props) => {

  const onFormSubmit = (registrationData) => {
    console.log(registrationData)
  }

  return <Registration {...props} onFormSubmit={onFormSubmit}/>
}

export default RegistrationContainer