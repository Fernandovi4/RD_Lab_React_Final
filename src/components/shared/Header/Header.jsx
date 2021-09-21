import React from 'react'
import styled from 'styled-components'
import SearchBar from '../SearchBar/SearchBar'
import Button from '../FormElements/Button'
import { NavLink } from 'react-router-dom'
import { colors } from '../../../constants'

const Header = ({ isLoggedIn, logOut }) => {

  return (
    <HeaderStyled>
      <div>
        <NavLink to="/">
          <LogoStyled>NETFLIX-LIKE</LogoStyled>
        </NavLink>
      </div>
      <SearchBar>Search</SearchBar>
      {isLoggedIn &&
      <WrapperStyled>
        <NavLink to="/personalcab">
          <Button
            title={'Personal Cabinet'}
            bgColor={colors.blueColor}
            bgColorHover={colors.blueColorHover}
          />
        </NavLink>
        <NavLink to="/">
        <Button
          title={'Logout'}
          bgColor={colors.blueColor}
          bgColorHover={colors.blueColorHover}
          onClick={() => logOut()}
        />
        </NavLink>
      </WrapperStyled>}
      {!isLoggedIn &&
      <WrapperStyled>
        <NavLink to="/registration">
          <Button title={'Registration'}
                  bgColor={colors.redColor}
                  bgColorHover={colors.redColorHover}
          />
        </NavLink>
        <NavLink to="/login">
          <Button title={'Login'}
                  bgColor={colors.redColor}
                  bgColorHover={colors.redColorHover}
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
  position: relative;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 1rem;
  padding: 1rem;
  background-color: ${colors.backgroundSecond};
`

const LogoStyled = styled.div`
  color: ${colors.redColor};
  text-decoration: none;
  font-weight: bold;
  letter-spacing: .3rem;
  font-size: 2rem;

  &:hover {
    color: ${colors.redColorHover};
    transition: .3s;
  }
`

const WrapperStyled = styled.div`
  display: flex;
  column-gap: 2px;
`