import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import cl from './FiltrationPeopleForm.module.css'
import { Button } from '../FormElements'
import { colors } from '../../utils/constants/colorConstants'
import { FormikProvider, useFormik, Field } from 'formik'
import { genderConstants } from '../../utils/constants/peopleConstants'
import { useSelector } from 'react-redux'
import { statePeople } from '../../store/peopleSlice'

const FiltrationPeopleForm = ({ onFormSubmit }) => {

  const [countryList, setCountryList] = useState([])

  const people = useSelector(statePeople)

  useEffect(() => {
    setCountryList(Array.from(new Set(people.map(el => el && el.country))).sort())
    console.table(countryList)
  }, [ people])


  const formik = useFormik({
    initialValues: { gender: '', country: '' },
    onSubmit: values => {
      return onFormSubmit(values)
    },
  })

  return (
    <FormikProvider value={formik}>
      <Form onSubmit={formik.handleSubmit}>
        <SelectWrapperSt>
          <LabelSt htmlFor="gender">by gender</LabelSt>
          <Field as={'select'} name="gender" className={cl.select}>
            {genderConstants.map(el =>
              <option key={el.value} value={el.value} className={cl.option}>
                {el.name}
              </option>,
            )}
          </Field>
        </SelectWrapperSt>
        <SelectWrapperSt>
          <LabelSt htmlFor="country">by country</LabelSt>
          <Field as={'select'} name="country" className={cl.select}>
            {countryList.length !== 0 && countryList.map((el, index) =>
              <option key={index} value={el} className={cl.option}>
                {el}
              </option>,
            )}
          </Field>
        </SelectWrapperSt>
        <Button
          padding="0.4rem"
          type="submit"
          title={'Sort'}
          bgColor={colors.blueColor}
          bgColorHover={colors.blueColorHover}
        />
      </Form>
    </FormikProvider>
  )
}

export default FiltrationPeopleForm

const Form = styled.form`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-end;
  justify-content: center;
  column-gap: .3rem;
  row-gap: .5rem;
`

const SelectWrapperSt = styled.div`
  display: flex;
  flex-flow: column nowrap;
  //align-items: center;
  //padding: 0 .3rem 1rem;
  width: 200px;
`

const LabelSt = styled.label`
  color: ${colors.lightText};
  text-transform: uppercase;
  font-size: .8rem;
`
