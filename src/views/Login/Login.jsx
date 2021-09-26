import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Field, FormikProvider, useFormik } from 'formik'
import { colors } from '../../utils/constants/colorConstants'
import { loginRegistrationValidator } from '../../utils/validators/loginRegistrationValidator'
import { Button, Input } from '../../components/FormElements'

const Login = ({ onFormSubmit }) => {

  const formik = useFormik({
    initialValues: { email: '', password: '', rememberMe: false },
    onSubmit: values => onFormSubmit(values),
    validate: values => loginRegistrationValidator(values),

  })

  return (
    <FormikProvider value={formik}>
      <Modal>
        <LoginWrapper>
          <form onSubmit={formik.handleSubmit}>
            <NavLink to="/">
              <CloseLoginBtn>&#10006;</CloseLoginBtn>
            </NavLink>
            <h1>Log In</h1>
            <br />
            <InputWrapperSt>
              <Input type={'text'}
                     placeholder={'Email'}
                     id="email"
                     name="email"
                     value={formik.values.email}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
              />
              <ValidationError>
                &ensp;{formik.errors.email && formik.touched.email && formik.errors.email}
              </ValidationError>
              <Input type={'password'}
                     placeholder={'Password'}
                     id="password"
                     name="password"
                     value={formik.values.password}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                     autocomplete={'current-password'}
              />
              <ValidationError>
                &ensp;{formik.errors.password && formik.touched.password && formik.errors.password}
              </ValidationError>
            </InputWrapperSt>
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
      </Modal>
    </FormikProvider>
  )
}

export default Login

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
  opacity: 0.7;
  overflow: hidden;
`

const LoginWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  row-gap: 2rem;
  width: 450px;
  margin: 0 auto;
  padding: 10px;
  background-color: ${colors.backgroundFirst};
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

`
const ValidationError = styled.span`
  color: ${colors.redColor}
`

const CloseLoginBtn = styled.span`
  float: right;

  &:hover {
    cursor: pointer;
  }
`

