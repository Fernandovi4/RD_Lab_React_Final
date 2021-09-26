import React from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/constants/colorConstants'
import { Button } from '../FormElements'



const ModalConfirm = (props) => {
  return(
    <Modal>
      <ConfirmWrapper>
        <h1>{props.message}</h1>
        <ButtonsWrapper>
          <Button
            title={'No'}
            bgColor={colors.blueColor}
            bgColorHover={colors.blueColorHover}
            // onClick={formik.handleReset}
          />
          <Button
            // type="submit"
            title={'Yes'}
            bgColor={colors.redColor}
            bgColorHover={colors.redColorHover}
          />
        </ButtonsWrapper>
      </ConfirmWrapper>
    </Modal>

  )
}

export default ModalConfirm

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: black;
  opacity: 0.7;
  overflow: hidden;
`
const ConfirmWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  row-gap: 2rem;
  width: 450px;
  margin: 0 auto;
  padding: 10px;
  background-color: ${colors.backgroundFirst};
  border-radius: .2rem;
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 10px;
`