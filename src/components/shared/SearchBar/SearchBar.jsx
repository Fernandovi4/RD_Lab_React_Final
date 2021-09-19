import React from 'react'
import styled from 'styled-components'


const SearchBar = (props) => {
  return (
    <SearchBarStyled>
      <InputStyled
        type="search"
        placeholder="Search Shows & People"
      />
      <ButtonStyled>Search</ButtonStyled>
    </SearchBarStyled>
  )
}

export default SearchBar

const SearchBarStyled = styled.div`
  display: flex;
  flex-flow: row nowrap;

`

const InputStyled = styled.input`
  padding: .5rem;
  border-radius: .2rem 0 0 .2rem;
  background-color: ${'#232323'};
  border: none;
  width: 30vw;
  color: #C1C8C7;

  &:focus {
    outline: none;
  }
`

const ButtonStyled = styled.button`
  background-color: #f65261;
  border-radius: 0 .2rem .2rem 0;
  padding: .5rem;
  border: none;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    background-color: #c4414c;
    transition: .3s;
  }
`
