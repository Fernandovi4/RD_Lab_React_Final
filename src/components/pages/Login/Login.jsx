import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Field, FormikProvider, useFormik } from 'formik'
import { colors } from '../../../constants'
import Input from '../../shared/FormElements/Input'
import Button from '../../shared/Button'

const Login = ({ onFormSubmit}) => {

  const formik = useFormik({
    initialValues: { email: '', password: '', rememberMe: false },
    onSubmit: values => onFormSubmit(values) ,
    validate: values => {
      const errors = {}
      if (!values.email) {
        errors.email = 'Required'
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address'
      }
      (!values.password) && (errors.password = 'Required')
      return errors
    }
  })


  return (
    <FormikProvider value={formik}>
      <LoginWrapper>
        <form onSubmit={formik.handleSubmit}>
          <h1>Log In</h1>
          <InputWrapperStyled>
            <Input type={'text'}
                   placeholder={'Email'}
                   id="email"
                   name="email"
                   value={formik.values.email}
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
            />
            <ErrorMessage>
              &ensp;{formik.errors.email && formik.touched.email && formik.errors.email}
            </ErrorMessage>
            <Input type={'password'}
                   placeholder={'Password'}
                   id="password"
                   name="password"
                   value={formik.values.password}
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   autocomplete={'current-password'}
            />
            <ErrorMessage>
              &ensp;{formik.errors.password && formik.touched.password && formik.errors.password}
            </ErrorMessage>
          </InputWrapperStyled>
          <label htmlFor="rememberMe">
            remember me &ensp;
            <Field type={'checkbox'} name={'rememberMe'} />
          </label>
          <ButtonsWrapper>
            <Button
              title={'Reset'}
              bgColor={colors.blueColor}
              bgColorHover={colors.blueColorHover}
              onClick={formik.handleReset}
            />
            <Button
              type="submit"
              title={'Log In'}
              bgColor={colors.redColor}
              bgColorHover={colors.redColorHover}
            />
          </ButtonsWrapper>
          <span>Dont have an account?<br />
          Please run
            <NavLink to="/registration" style={{ color: colors.blueColor }}> REGISTRATION </NavLink>
        </span>
        </form>
      </LoginWrapper>
    </FormikProvider>
  )
}

export default Login

const LoginWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  row-gap: 2rem;
  max-width: 450px;
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
const InputWrapperStyled = styled.div`
  display: flex;
  flex-flow: column nowrap;

`
const ErrorMessage = styled.span`
  color: ${colors.redColor}
`

