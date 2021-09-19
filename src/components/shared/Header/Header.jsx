import React, { useState } from 'react'
import styled from 'styled-components'
import SearchBar from '../SearchBar/SearchBar'
import Button from '../Button'
import { Redirect } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Header = (props) => {

  const [isLoggedIn, setLoggedIn] = useState(true)
  const toogleLogIn = () => setLoggedIn(!isLoggedIn)
  const logIn = () => {
    console.log('clicked')
    toogleLogIn()
    return <Redirect to={'/login'} />
  }

  return (
    <HeaderStyled {...props}>
      <div>
        <a href='/'>
          <LogoStyled>NETFLIX-LIKE</LogoStyled>
        </a>
      </div>
      <SearchBar>Search</SearchBar>
      {isLoggedIn &&
      <WrapperStyled>
        <Button title={'Personal Cabinet'} bgColor={'#008ace'} bgColorHover={'#009eef'} />
        <Button title={'Logout'}
                bgColor={'#008ace'}
                bgColorHover={'#009eef'}
                onClick={toogleLogIn} />
      </WrapperStyled>}
      {!isLoggedIn &&
      <WrapperStyled>
        <Button title={'Registation'}
                bgColor={'#f65261'}
                bgColorHover={'#c4414c'} />
        <NavLink to='/login'>
          <Button title={'Login'}
                  bgColor={'#f65261'}
                  bgColorHover={'#c4414c'}
                  onClick={logIn}
          />
        </NavLink>
        <div>
        </div>
      </WrapperStyled>
      }
    </HeaderStyled>
  )
}
export default Header


const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 1rem;
  padding: 1rem;
  background-color: ${'#424242'};
`

const LogoStyled = styled.div`
  color: ${'#f65261'};
  text-decoration: none;
  font-weight: bold;
  letter-spacing: .3rem;
  font-size: 2rem;

  &:hover {
    color: ${'#c4414c'};
    transition: .3s;
  }
`

const WrapperStyled = styled.div`
  display: flex;
  column-gap: 2px;
`