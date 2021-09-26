import React from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/constants/colorConstants'

const FromFavoriteBotton = ({ onClick, title }) => {
  return (
    <UnFollowBtnSt
      onClick={() => onClick()}
    >{title}</UnFollowBtnSt>
  )
}

export default FromFavoriteBotton


const UnFollowBtnSt = styled.button`
  color: ${colors.redColor};
  background-color: transparent;
  padding: .1rem .2rem;
  border: 1px solid gainsboro;
  text-transform: uppercase;

  &:hover {
    transition: .1s;
    cursor: pointer;
    background-color: ${colors.backgroundThird};
  }

  &:active {
    cursor: pointer;
    background-color: transparent;
  }
`