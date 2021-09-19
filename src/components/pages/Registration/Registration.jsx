import React from 'react'
import styled from 'styled-components'
import Input from '../../shared/FormElements/Input'
import Button from '../../shared/Button'
import { colors } from '../../../constants'

const Registration = (props) => {
  return(
    <SignUpWrapper>
      <h1>Registration</h1>
      <InputWrapperStyled>
        <Input type={'text'} placeholder={'Name'}/>
        <ErrorMessage>Incorrect</ErrorMessage>
      </InputWrapperStyled>
      <InputWrapperStyled>
        <Input type={'text'} placeholder={'Email'}/>
        <ErrorMessage>Incorrect</ErrorMessage>
      </InputWrapperStyled>
      <InputWrapperStyled>
        <Input type={'password'} placeholder={'Password'}/>
        <ErrorMessage>Incorrect</ErrorMessage>
      </InputWrapperStyled>
      <InputWrapperStyled>
        <Input type={'number'} placeholder={'Age'}/>
        <ErrorMessage>Incorrect</ErrorMessage>
      </InputWrapperStyled>

      <ButtonsWrapper>
        <Button title={'Resset'}
                bgColor={colors.blueColor}
                bgColorHover={colors.blueColorHover}
        />
        <Button title={'Registration'}
                bgColor={colors.redColor}
                bgColorHover={colors.redColorHover}
        />
      </ButtonsWrapper>


    </SignUpWrapper>
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