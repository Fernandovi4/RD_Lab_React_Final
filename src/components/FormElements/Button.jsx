import React from 'react'
import styled from 'styled-components'
import { fonts } from '../../utils/constants/fontsConstants'

const Button = (props) => <ButtonSt {...props}>{props.title}</ButtonSt>

export default Button

const ButtonSt = styled.button`
  background-color: ${props => props.bgColor};
  font-family: ${fonts.secondaryFont};
  padding: ${props => props.padding || ".5rem"};
  border: none;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    background-color: ${props => props.bgColorHover};
    transition: .3s;
  }
  &:active {
    background-color: ${props => props.bgColor};
  }
`