import React from 'react'
import styled from 'styled-components'
import MovieCardContainer from '../../components/MovieCard/MovieCardContainer'
import FiltrationForm from '../../components/FiltrationForm/FiltrationForm'

const Shows = ({ shows, handleFiltration }) => {

  const onFormSubmit = (val) => {
    handleFiltration(val)
  }

  return (
    <>
      <FiltrationForm onFormSubmit={onFormSubmit} />
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
