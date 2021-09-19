import React from 'react'
import styled from 'styled-components'
import Header from './components/shared/Header/Header'
import Login from './components/pages/Login/Login'
import { BrowserRouter, Route } from 'react-router-dom'
import Registration from './components/pages/Registration/Registration'
import Home from './components/pages/Home/Home'

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  //padding: 2rem;
  background-color: ${'#232323'};
`

function App() {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Header />
        <ContentWrapperStyled>
          <Route path="/login" render={() => <Login />}
          />
          <Route path="/registration" render={() => <Registration />}
          />
          <Route path="/home" render={() => <Home />}
          />
        </ContentWrapperStyled>
      </AppWrapper>
    </BrowserRouter>

  )
}

export default App

const ContentWrapperStyled = styled.div`
padding: 15px;
`

