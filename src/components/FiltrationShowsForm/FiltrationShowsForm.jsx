import React from 'react'
import styled from 'styled-components'
import cl from './FiltrationShowsForm.module.css'
import { Button } from '../FormElements'
import { genresConstants, ratingConstants, runTimeConstants } from '../../utils/constants/showsConstants'
import { colors } from '../../utils/constants/colorConstants'
import { FormikProvider, useFormik, Field } from 'formik'

const FiltrationShowsForm = ({ onFormSubmit }) => {


  const formik = useFormik({
    initialValues: { genre: '', rating: '', runtime: '' },
    onSubmit: values => {
      return onFormSubmit(values)
    },
  })

  return (
    <FormikProvider value={formik}>
      <Form onSubmit={formik.handleSubmit}>
        <SelectWrapperSt>
          <LabelSt htmlFor="genre">by genre</LabelSt>
          <Field as={'select'} name="genre" className={cl.select}>
            {genresConstants.map(el =>
              <option key={el.value} value={el.value} className={cl.option}>
                {el.name}
              </option>,
            )}
          </Field>
        </SelectWrapperSt>
        <SelectWrapperSt>
          <LabelSt htmlFor="rating">by rating</LabelSt>
          <Field as={'select'} name="rating" className={cl.select}>
            {ratingConstants.map(el =>
              <option key={el.value} value={el.value} className={cl.option}>
                {el.name}
              </option>,
            )}
          </Field>
        </SelectWrapperSt>
        <SelectWrapperSt>
          <LabelSt htmlFor="runtime">by runtime</LabelSt>
          <Field as={'select'} name="runtime" className={cl.select}>
            {runTimeConstants.map(el =>
              <option key={el.value} value={el.value} className={cl.option}>
                {el.name}
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

export default FiltrationShowsForm

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
