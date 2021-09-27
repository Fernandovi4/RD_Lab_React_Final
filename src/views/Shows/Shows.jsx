import React from 'react'
import styled from 'styled-components'
import MovieCardContainer from '../../components/MovieCard/MovieCardContainer'
import FiltrationForm from '../../components/FiltrationForm/FiltrationForm'
import SearhBarContainer from '../../components/SearchBar/SearhBarContainer'

const Shows = ({ shows, handleFiltration }) => {

  const onFormSubmit = (val) => {
    handleFiltration(val)
  }

  return (
    <>
      <ControlsWrapperSt>
        <SearhBarContainer>Search</SearhBarContainer>
        <FiltrationForm onFormSubmit={onFormSubmit} />
      </ControlsWrapperSt>
      <ShowsPageSt>
        {shows.map(el => {
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