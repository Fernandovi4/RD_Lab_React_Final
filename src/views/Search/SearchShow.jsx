import React from 'react'
import styled from 'styled-components'
import MovieCardContainer from '../../components/MovieCard/MovieCardContainer'
import { colors } from '../../utils/constants/colorConstants'
import { NavLink } from 'react-router-dom'

const SearchShow = ({ shows, searchedName }) => {
  console.log('shows', shows)
  return (
    <>
      <NavLink to="/shows"><Span>&#10094;&#10094;&#10094;    Back to shows</Span></NavLink>
      <TitleSt>Search-results for : " <SpanSt>{searchedName}</SpanSt> "</TitleSt>
      {shows.length === 0 ?
        <>
          <H2St> Nothig found for this request </H2St>
        </> :
        <SearchWrapperSt>

          {shows.map(el => {
            return <MovieCardContainer
              showId={el.id}
              name={el.name}
              imgUrl={el.imgUrl}
              genres={el.genres}
              key={el.id}
            />
          })}
        </SearchWrapperSt>
      }

    </>
  )
}

export default SearchShow

const SearchWrapperSt = styled.div`
  display: flex;
  flex-flow: row wrap;
  column-gap: 1rem;
  row-gap: 1rem;
  padding-top: 1rem;
  justify-content: center;
`
const TitleSt = styled.h1`
  color: ${colors.lightText};
  text-align: center;
`
const SpanSt = styled.span`
  color: white;
`
const Span = styled.span`
  color: ${colors.blueColor};
  text-transform: uppercase;
  padding: 0.3rem 1rem 0.3rem 0.3rem;
  transition: .3s;
  margin-bottom: 3rem;

  &:hover {
    color: ${colors.lightText};
    cursor: pointer;
  }
`

const H2St = styled.h2`
text-align: center;
  padding-top: 3rem;
  color: ${colors.redColor};
`