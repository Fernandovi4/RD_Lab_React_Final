import React from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/constants/colorConstants'
import { fonts } from '../../utils/constants/fontsConstants'
import { Form, FormikProvider, useFormik } from 'formik'


const SearchBar = ({ onFormSubmit }) => {

  const formik = useFormik({
    initialValues: { search: '' },
    onSubmit: values => onFormSubmit(values),
  })

  return (
    <FormikProvider value={formik}>
      <SearchBarSt>
        <LabelSt htmlFor="search">Search Shows by name</LabelSt>
        <Form onSubmit={formik.handleSubmit}>
          <InputSt
            type="text"
            id="search"
            name="search"
            placeholder="Search"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.search}
          />
          <ButtonSt>Search</ButtonSt>
        </Form>
      </SearchBarSt>
    </FormikProvider>
  )
}

export default SearchBar

const SearchBarSt = styled.div`
  display: flex;
  flex-flow: column nowrap;
`

const InputSt = styled.input`
  padding: .3rem;
  border: 1px solid lightgray;
  //border-radius: .2rem 0 0 .2rem;
  background-color: ${colors.backgroundFirst};
  color: #C1C8C7;
  width: 30vw;
  &:focus {
    outline: none;
  }
  &:focus-visible{
    outline: ${colors.blueColor} 2px solid;
    border: transparent;
  }
`

const ButtonSt = styled.button`
  position: relative;
  margin-left: 5px;
  background-color: ${colors.blueColor};
  font-family: ${fonts.secondaryFont};
  //border-radius: 0 .2rem .2rem 0;
  padding: .4rem;
  border: none;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    background-color: ${colors.blueColorHover};
    transition: .3s;
  }
`

const LabelSt = styled.label`
  color: ${colors.lightText};
  text-transform: uppercase;
  font-size: .8rem;
`
