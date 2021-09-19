import React from 'react'
import styled from 'styled-components'
import Header from './components/shared/Header/Header'
import Login from './components/pages/Login/Login'

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  //padding: 2rem;
  background-color: ${'#232323'};
`

function App() {
  return (
    <AppWrapper>
      <Header />
      <ContentWrapperStyled>
        <Login/>
        {/*<Registration/>*/}
      </ContentWrapperStyled>
    </AppWrapper>
  )
}

export default App

const ContentWrapperStyled = styled.div`
padding: 15px;
`

