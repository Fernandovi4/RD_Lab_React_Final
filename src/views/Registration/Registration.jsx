import React from 'react'
import styled from 'styled-components'
import { FormikProvider, useFormik } from 'formik'
import Input from '../../components/FormElements/Input'
import Button from '../../components/FormElements/Button'
import { colors } from '../../utils/constants/colorConstants'
import { loginRegistrationValidator } from '../../utils/validators/loginRegistrationValidator'
import { NavLink } from 'react-router-dom'

const Registration = ({ onFormSubmit }) => {

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: values => onFormSubmit(values),
    validate: values => loginRegistrationValidator(values),
  })

  return (
    <FormikProvider value={formik}>
      <Modal>
      <RegistrationWrapper>
        <form onSubmit={formik.handleSubmit}>
          <NavLink to="/">
            <CloseRegistration >	&#10006;</CloseRegistration>
          </NavLink>
          <h1>Registration</h1>
          <br/>
          <InputWrapperSt>
            <Input
              type={'text'}
              placeholder={'Email'}
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <ValidationError>
              &ensp;{formik.errors.email && formik.touched.email && formik.errors.email}
            </ValidationError>
            <Input
              type={'password'}
              placeholder={'Password'}
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autocomplete={'current-password'}
            />
          </InputWrapperSt>
          <ValidationError>
            &ensp;{formik.errors.password && formik.touched.password && formik.errors.password}
          </ValidationError>
          <ButtonsWrapper>
            <Button title={'Reset'}
                    bgColor={colors.blueColor}
                    bgColorHover={colors.blueColorHover}
                    onClick={formik.handleReset}
            />
            <Button type="submit"
                    title={'Registration'}
                    bgColor={colors.redColor}
                    bgColorHover={colors.redColorHover}
            />
          </ButtonsWrapper>
        </form>
      </RegistrationWrapper>
      </Modal>
    </FormikProvider>
  )
}

export default Registration

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: black;
  opacity: 0.9;
  overflow: hidden;
`

const RegistrationWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  row-gap: 2rem;
  width: 450px;
  margin: 0 auto;
  padding: 10px;
  background-color: ${'#424242'};
  border-radius: .2rem;
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 10px;
`

const InputWrapperSt = styled.div`
  display: flex;
  flex-flow: column nowrap;
  color: black;
`

const ValidationError = styled.span`
  color: ${colors.redColor}
`

const CloseRegistration = styled.span`
  float: right;
  &:hover{
    cursor: pointer;
  }
`