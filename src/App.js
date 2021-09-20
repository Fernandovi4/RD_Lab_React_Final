import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Route } from 'react-router-dom'
import { colors } from './constants'
import Header from './components/shared/Header/Header'
import Home from './components/pages/Home/Home'
import LoginContainer from './components/pages/Login/LoginContainer'
import RegistrationContainer from './components/pages/Registration/RegistrationContainer'

function App() {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Header />
        <ContentWrapperStyled>
          <Route path="/login" render={() => <LoginContainer />}
          />
          <Route path="/registration" render={() => <RegistrationContainer />}
          />
          <Route path="/home" render={() => <Home />}
          />
        </ContentWrapperStyled>
      </AppWrapper>
    </BrowserRouter>
  )
}

export default App

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${colors.backgroundFirst};
`

const ContentWrapperStyled = styled.div`
padding: 15px;
`

