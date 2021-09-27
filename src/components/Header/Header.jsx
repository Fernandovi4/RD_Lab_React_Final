import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { colors } from '../../utils/constants/colorConstants'
import { Button } from '../FormElements'
// import SearhBarContainer from '../SearchBar/SearhBarContainer'


const Header = ({ isLoggedIn, logOut }) => {

  return (
    <HeaderSt>
      <div>
        <NavLink to="/">
          <LogoSt>NETFLIX-LIKE</LogoSt>
        </NavLink>
      </div>
      {/*<SearhBarContainer>Search</SearhBarContainer>*/}
      {isLoggedIn &&
      <ControlsSt>
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
      </ControlsSt>}
      {!isLoggedIn &&
      <ControlsSt>
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
      </ControlsSt>
      }
    </HeaderSt>
  )
}
export default Header


const HeaderSt = styled.header`
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

const LogoSt = styled.div`
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

const ControlsSt = styled.div`
  display: flex;
  column-gap: 2px;
`