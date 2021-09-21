import React from 'react'
import styled from 'styled-components'

const Button = (props) => {
  return (
    <ButtonStyled {...props}>{props.title}</ButtonStyled>
  )
}

export default Button

const ButtonStyled = styled.button`
  background-color: ${props => props.bgColor };
  //border-radius: 0 .2rem .2rem 0;
  padding: .5rem;
  border: none;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    background-color: ${props => props.bgColorHover};
    transition: .3s;
  }
`