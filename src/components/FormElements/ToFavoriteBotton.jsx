import React from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/constants/colorConstants'

const ToFavoriteBotton = ({ onClick, title }) => {
  return (
    <FollowBtnSt onClick={() => onClick()}>{title}</FollowBtnSt>
  )
}

export default ToFavoriteBotton

const btnStyle = {
  'background-color': 'transparent',
  'padding': '.1rem .2rem',
  'border': '1px solid gainsboro',
  'text-transform': 'uppercase',
}

const FollowBtnSt = styled.button`
  color: ${colors.blueColor}
}

;
${btnStyle}
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