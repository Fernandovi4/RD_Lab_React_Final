import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { colors } from './utils/constants/colorConstants'
import LoginContainer from './views/Login/LoginContainer'
import RegistrationContainer from './views/Registration/RegistrationContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import PersonalCab from './views/PersonalCab/PesonalCab'
import HomeContainer from './views/Home/HomeContainer'
import ShowsContainer from './views/Shows/ShowsContainer'
import OneShowContainer from './views/OneShow/OneShowContainer'

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
            <Route exact path="/" render={() => <HomeContainer />}
            />
            <Route exact path="/shows" render={() => <ShowsContainer />}
            />
            <Route exact path="/people" render={() => <ShowsContainer />}
            />
            <Route path="/personalcab" render={() => <PersonalCab />}
            />
            <Switch>
              <Route path="/show:id" render={() => <OneShowContainer />} />
            </Switch>
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

