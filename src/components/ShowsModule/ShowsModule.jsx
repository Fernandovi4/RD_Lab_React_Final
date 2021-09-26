import React from 'react'
import styled from 'styled-components'
import MovieCardContainer from '../MovieCard/MovieCardContainer'
import { NavLink } from 'react-router-dom'
import { colors } from '../../utils/constants/colorConstants'

const ShowsModule = ({ title, url, shows }) => {
  console.log(shows)
  return (
    <ShowModuleSt>
      <NavLink to={url}>
        <TitleSt>{title}...</TitleSt>
      </NavLink>
      <ShowsWrapperSt>
        <CarooselBtn>&#10094;&#10094;</CarooselBtn>
        {shows.map(el => {
          return (
            <ListItem key={el.id}>
            <MovieCardContainer
              showId={el.id}
              imgUrl = {el.imgUrl}
              name={el.name}
              genres={el.genres}
            />
          </ListItem>)
        })}
        <CarooselBtn>&#10095;&#10095;</CarooselBtn>
      </ShowsWrapperSt>
    </ShowModuleSt>
  )
}

export default ShowsModule

const ShowModuleSt = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  row-gap: 1rem;
  width: 100%;
  overflow: hidden;
  //text-align: center;
`

const TitleSt = styled.h2`
text-align: center;
`

const ShowsWrapperSt = styled.ul`
  display: flex;
  flex-flow: row wrap;

  column-gap: 1rem;
  //todo
  //width: 9999px;
  list-style: none;
  transition: margin-left 250ms;
  margin: 0 auto;
  
`

const ListItem = styled.li`
display: inline-block;
`

const CarooselBtn = styled.div`
  height: 100%;
  display: flex;
  align-content: center;
  flex-wrap: nowrap;
  align-items: center;
  font-size: 3rem;
  font-weight: bold;
  color: ${colors.backgroundSecond};
  &:hover{
    cursor: pointer;
    color: white;
    transition: .3s;
  }
`