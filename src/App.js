import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Route} from 'react-router-dom'
import { useSelector} from 'react-redux'
import { colors } from './utils/constants/colorConstants'
import LoginContainer from './views/Login/LoginContainer'
import RegistrationContainer from './views/Registration/RegistrationContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import PersonalCab from './views/PersonalCab/PesonalCab'
import HomeContainer from './views/Home/HomeContainer'
import ShowsContainer from './views/Shows/ShowsContainer'
import OneShowContainer from './views/OneShow/OneShowContainer'
import SearchShowContainer from './views/Search/SearchShowContainer'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import { isAuth } from './store/authSlice'
import OnePerson from './views/OnePerson/OnePerson'
import OnePersonContainer from './views/OnePerson/OnePersonContainer'
import PeoplesContainer from './views/Peoples/PeoplesContainer'


function App() {

  const  auth  = useSelector(isAuth)

  return (
      <BrowserRouter>
        <AppWrapper>
          <Route path="/login" render={() => <LoginContainer />} />
          <Route path="/registration" render={() => <RegistrationContainer />} />
          <HeaderContainer />
          <ContentWrapperStyled>
            <Route exact path="/" render={() => <HomeContainer />} />
            <Route exact path="/shows" render={() => <ShowsContainer />} />
            <Route exact path="/people" render={() => <PeoplesContainer />} />
            <Route path="/search/shows:search" render={() => <SearchShowContainer />} />
            <Route path="/show:id" render={() => <OneShowContainer />} />
            <Route path="/person:id" render={() => <OnePersonContainer />} />
            <PrivateRoute auth={auth} path="/personalcab" component={() => (<PersonalCab />)} />
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

