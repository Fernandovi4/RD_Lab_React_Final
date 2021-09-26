import React from 'react'
import styled from 'styled-components'

const Input = (props) => <InputSt type={props.type} {...props} />

export default Input

const InputSt = styled.input`
  padding: .5rem;
  border-radius: .2rem;
  border: none;
  color: black;

  &:focus {
    outline: none;
  }
`