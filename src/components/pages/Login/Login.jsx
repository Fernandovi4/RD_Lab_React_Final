import React from 'react'
import styled from 'styled-components'
import Input from '../../shared/FormElements/Input'
import Button from '../../shared/Button'
import { colors } from '../../../constants'

const Login = (props) => {
  return(
    <LoginWrapper>
      <h1>Log In</h1>
      <InputWrapperStyled>
        <Input type={'text'} placeholder={'Email'}/>
        <ErrorMessage>Incorrect</ErrorMessage>
      </InputWrapperStyled>
      <InputWrapperStyled>
        <Input type={'password'} placeholder={'Password'}/>
        <ErrorMessage>Incorrect</ErrorMessage>
      </InputWrapperStyled>

      <label htmlFor="remenberMe">
        remember me &ensp;
        <Input type={'checkbox'} placeholder={'Password1'} name={'remenberMe'}/>
      </label>
      <ButtonsWrapper>
        <Button title={'Resset'}
                bgColor={'#008ace'}
                bgColorHover={'#009eef'}
          />
        <Button title={'Log In'}
                bgColor={'#f65261'}
                bgColorHover={'#c4414c'}/>
      </ButtonsWrapper>


    </LoginWrapper>
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