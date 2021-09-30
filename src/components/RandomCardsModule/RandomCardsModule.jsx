import React from 'react'
import styled from 'styled-components'
import MovieCardContainer from '../MovieCard/MovieCardContainer'
import { NavLink } from 'react-router-dom'
import { colors } from '../../utils/constants/colorConstants'
import { Button } from '../FormElements'
import PersonCardContainer from '../PersonCard/PersonCardContainer'

const RandomCardsModule = (props) => {
  const { items, title, url, identifier } = props

  return (
    <ShowModuleSt>
      <TitleSt>
        <h1 style={{ 'color': colors.lightText }}>Random {identifier}</h1>
        <NavLink to={url}>
          {/*<TitleSt>{title}...</TitleSt>*/}
          <Button
            title={title}
            bgColor={colors.blueColor}
            bgColorHover={colors.blueColorHover}
            padding={'.5rem 1rem'}
          />
        </NavLink>
      </TitleSt>
      <ShowsWrapperSt>
        {/*<СarouselBtn>&#10094;&#10094;</СarouselBtn>*/}
        {items.map(el => {
          return (
            identifier === 'shows' ?
              <ListItem key={el.id}>
                <MovieCardContainer
                  showId={el.id}
                  imgUrl={el.imgUrl || 'https://via.placeholder.com/200x280/424242/000000?Text=No+Picture'}
                  name={el.name}
                  genres={el.genres}
                />
              </ListItem> :
              <ListItem key={el.id}>
                <PersonCardContainer
                  personId={el.id}
                  imgUrl={el.imgUrl || 'https://via.placeholder.com/200x280/424242/000000?Text=No+Picture'}
                  name={el.name}
                  gender={el.gender}
                />
              </ListItem>
          )
        })}
        <NavLink to={url}>
          {/*<СarouselBtn>&#10095;&#10095;</СarouselBtn>*/}
        </NavLink>
      </ShowsWrapperSt>
    </ShowModuleSt>
  )
}

export default RandomCardsModule

const ShowModuleSt = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;
  width: 100%;
  overflow: hidden;
  //text-align: center;
`

const TitleSt = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  width: 85%;
`

const ShowsWrapperSt = styled.ul`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
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

// const СarouselBtn = styled.div`
//   height: 100%;
//   display: flex;
//   align-content: center;
//   flex-wrap: nowrap;
//   align-items: center;
//   font-size: 5rem;
//   font-weight: bold;
//   color: ${colors.backgroundSecond};
//
//   &:hover {
//     cursor: pointer;
//     color: white;
//     transition: .3s;
//   }
// `