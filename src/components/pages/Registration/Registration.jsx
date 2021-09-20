import React from 'react'
import styled from 'styled-components'
import { FormikProvider, useFormik } from 'formik'
import Input from '../../shared/FormElements/Input'
import Button from '../../shared/Button'
import { colors } from '../../../constants'

const Registration = ({ onFormSubmit }) => {

  const formik = useFormik({
    initialValues: { name: '', email: '', password: '' },
    onSubmit: values => onFormSubmit(values),
    validate: values => {
      const errors = {}
      if (!values.email) {
        errors.email = 'Required'
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address'
      }
      if (!values.name) {
        errors.name = 'Required'
      }
      if (!values.password) {
        errors.password = 'Required'
      }
      return errors
    },
  })

  return (
    <FormikProvider value={formik}>
      <SignUpWrapper>
        <form onSubmit={formik.handleSubmit}>
          <h1>Registration</h1>
          <InputWrapperStyled>
            <Input
              type={'text'}
              placeholder={'Name'}
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <ErrorMessage>
              &ensp;{formik.errors.name && formik.touched.name && formik.errors.name}
            </ErrorMessage>
            <Input
              type={'text'}
              placeholder={'Email'}
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <ErrorMessage>
              &ensp;{formik.errors.email && formik.touched.email && formik.errors.email}
            </ErrorMessage>
            <Input
              type={'password'}
              placeholder={'Password'}
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autocomplete={'current-password'}
            />
          </InputWrapperStyled>
          <ErrorMessage>
            &ensp;{formik.errors.password && formik.touched.password && formik.errors.password}
          </ErrorMessage>
          <ButtonsWrapper>
            <Button title={'Resset'}
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
      </SignUpWrapper>
    </FormikProvider>
  )
}

export default Registration

const SignUpWrapper = styled.div`
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
  color: black;
`

const ErrorMessage = styled.span`
  color: ${colors.redColor}
`