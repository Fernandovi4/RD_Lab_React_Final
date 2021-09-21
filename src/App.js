import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Route } from 'react-router-dom'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { colors } from './constants'
import Home from './components/pages/Home/Home'
import LoginContainer from './components/pages/Login/LoginContainer'
import RegistrationContainer from './components/pages/Registration/RegistrationContainer'
import HeaderContainer from './components/shared/Header/HeaderContainer'
import PersonalCab from './components/pages/PersonalCab/PesonalCab'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppWrapper>
          <Route path="/login" render={() => <LoginContainer />}
          />
          <Route path="/registration" render={() => <RegistrationContainer />}
          />
          <HeaderContainer />
          <ContentWrapperStyled>
            <Route exact path="/" render={() => <Home />}
            />
            <Route path="/personalcab" render={() => <PersonalCab />}
            />
            {/*<MovieCardContainer />*/}
            {/*<MovieCardContainer />*/}
            {/*<MovieCardContainer />*/}
            {/*<MovieCardContainer />*/}
          </ContentWrapperStyled>
        </AppWrapper>
      </Provider>
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

