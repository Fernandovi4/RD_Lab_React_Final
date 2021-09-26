import React from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/constants/colorConstants'

const Select = ({ options }) => {

  return (
    <SelectSt>
      {options.map(el =>
        <OptionSt
          key={el.value}
          value={el.value}
        >{el.name}
        </OptionSt>,
      )}
    </SelectSt>
  )
}

export default Select

const SelectSt = styled.select`
  background-color: ${colors.backgroundFirst};
  color: ${colors.lightText};
  outline: transparent 2px solid;
  padding: .3rem;

  &:focus-visible {
    outline: ${colors.blueColor} 2px solid;
    border: transparent;
  }
`
const OptionSt = styled.option`
  color: ${colors.lightText};
`
