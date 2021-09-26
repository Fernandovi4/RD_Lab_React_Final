import React from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/constants/colorConstants'
import { fonts } from '../../utils/constants/fontsConstants'


const SearchBar = () => {
  return (
    <SearchBarSt>
      <InputSt
        type="search"
        placeholder="Search Shows & People"
      />
      <ButtonSt>Search</ButtonSt>
    </SearchBarSt>
  )
}

export default SearchBar

const SearchBarSt = styled.div`
  display: flex;
  flex-flow: row nowrap;
`

const InputSt = styled.input`
  padding: .5rem;
  border: none;
  border-radius: .2rem 0 0 .2rem;
  background-color: ${colors.backgroundFirst};
  color: #C1C8C7;
  width: 30vw;
  &:focus {
    outline: none;
  }
  &:focus-visible{
    outline: ${colors.redColor} 1px solid;
    border: transparent;
  }
`

const ButtonSt = styled.button`
  background-color: ${colors.redColor};
  font-family: ${fonts.secondaryFont};
  border-radius: 0 .2rem .2rem 0;
  padding: .5rem;
  border: none;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    background-color: ${colors.redColorHover};
    transition: .3s;
  }
`
