import React from 'react'
import styled from 'styled-components'
import MovieCardContainer from '../../components/MovieCard/MovieCardContainer'
import FiltrationShowsForm from '../../components/FiltrationShowsForm/FiltrationShowsForm'
import SearHBarContainer from '../../components/SearchBar/SearсhBarContainer'

const Shows = ({ shows, handleFiltration }) => {

  const onFormSubmit = val => handleFiltration(val)

  return (
    <>
      <ControlsWrapperSt>
        <SearHBarContainer>Search</SearHBarContainer>
        <FiltrationShowsForm onFormSubmit={onFormSubmit} />
      </ControlsWrapperSt>
      <ShowsPageSt>
        {shows.length === 0 ?
          <h2>Nothing found with choosed parameters!</h2> :
          shows.map(el => {
            return <MovieCardContainer
              showId={el.id}
              name={el.name}
              imgUrl={el.imgUrl}
              genres={el.genres}
              key={el.id}
            />
          })}
      </ShowsPageSt>
    </>
  )
}

export default Shows

const ShowsPageSt = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  gap: 2rem;
  margin: 0 auto;
`

const ControlsWrapperSt = styled.div`
  display: flex;
  flex-flow: row wrap;
  row-gap: .3rem;
  align-items: flex-end;
  justify-content: space-around;
  padding-bottom: 2rem;

`