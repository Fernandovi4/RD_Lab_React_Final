import React from 'react'
import styled from 'styled-components'
import cl from './FiltrationForm.module.css'
import { Button } from '../FormElements'
import { genresConstants, ratingConstants, runTimeConstants } from '../../utils/constants/showsConstants'
import { colors } from '../../utils/constants/colorConstants'
import { FormikProvider, useFormik, Field } from 'formik'

const FiltrationForm = ({ onFormSubmit }) => {


  const formik = useFormik({
    initialValues: { genre: '', rating: '', runtime: '' },
    onSubmit: values => {
      return onFormSubmit(values)
    },
  })

  return (
    <FormikProvider value={formik}>
      <Form onSubmit={formik.handleSubmit}>
        <SelectWraperSt>
          <LabelSt htmlFor="genre">by genre</LabelSt>
          <Field as={'select'} name="genre" className={cl.select}>
            {genresConstants.map(el =>
              <option key={el.value} value={el.value} className={cl.option}>
                {el.name}
              </option>,
            )}
          </Field>
        </SelectWraperSt>
        <SelectWraperSt>
          <LabelSt htmlFor="genre">by rating</LabelSt>
          <Field as={'select'} name="rating" className={cl.select}>
            {ratingConstants.map(el =>
              <option key={el.value} value={el.value} className={cl.option}>
                {el.name}
              </option>,
            )}
          </Field>
        </SelectWraperSt>
        <SelectWraperSt>
          <LabelSt htmlFor="genre">by runtime</LabelSt>
          <Field as={'select'} name="runtime" className={cl.select}>
            {runTimeConstants.map(el =>
              <option key={el.value} value={el.value} className={cl.option}>
                {el.name}
              </option>,
            )}
          </Field>
        </SelectWraperSt>
        <Button
          type="submit"
          title={'Sort show'}
          bgColor={colors.blueColor}
          bgColorHover={colors.blueColorHover}
        />
      </Form>
    </FormikProvider>
  )
}

export default FiltrationForm

const Form = styled.form`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  column-gap: .5rem;
  row-gap: .5rem;
`

const SelectWraperSt = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 0 1rem 1rem;
  width: 200px;
`

const LabelSt = styled.label`
  color: ${colors.lightText};
  text-transform: uppercase;
  font-size: .8rem;
`
