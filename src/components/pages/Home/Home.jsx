import React from 'react'
import MovieCardContainer from '../../shared/Card/MovieCardContainer'
import styled from 'styled-components'

const Home = () => {
  return(
    <HomePageStyled>
      <MovieCardContainer />
      <MovieCardContainer />
      <MovieCardContainer />
      <MovieCardContainer />
      <MovieCardContainer />
      <MovieCardContainer />
      <MovieCardContainer />
      <MovieCardContainer />
      <MovieCardContainer />
      <MovieCardContainer />
      <MovieCardContainer />
      <MovieCardContainer />
      <MovieCardContainer />
      <MovieCardContainer />
      <MovieCardContainer />
      <MovieCardContainer />
      <MovieCardContainer />
      <MovieCardContainer />
      <MovieCardContainer />
      <MovieCardContainer />
    </HomePageStyled>
  )
}

export default Home

const HomePageStyled = styled.div`
display: flex;
  flex-flow: row wrap;
  gap: 2rem;
`