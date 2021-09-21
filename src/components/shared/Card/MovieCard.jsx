import React from 'react'
import styled from 'styled-components'
import { colors } from '../../../constants'

const MovieCard = ({ imgUrl, name ,genres}) => {
  return(
    <MovieCardWrapperStyled>
      <img src={imgUrl} alt={`oficial poster of ${name}`} style={{'width':'200px'}}/>
      <MovieInfoWrapperStyled>
        <CardTextWrapperStyled>
          <h3>{name}</h3>
          <GenresStyled>{genres}</GenresStyled>
        </CardTextWrapperStyled>
        <CardContrlosWrapperStyled>
          <FollowBtnStyled>To favorite</FollowBtnStyled>
          <LikeBtnStyled>Like ❤</LikeBtnStyled>
        </CardContrlosWrapperStyled>
      </MovieInfoWrapperStyled>
    </MovieCardWrapperStyled>
  )
}

export default MovieCard

const MovieCardWrapperStyled = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 200px;
  -webkit-transition: all .5s ease-out;
  &:hover{
    position: relative;
    transform: scale(1.03);
  }
`

const MovieInfoWrapperStyled =styled.div`
  padding: .6rem 0;
  display: flex;
  justify-content: space-between;
`

const CardTextWrapperStyled = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: flex-start;
`

const GenresStyled = styled.span`
  font-size: .7rem;
  color: gainsboro;
`

const CardContrlosWrapperStyled = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: flex-end;
  row-gap: .5rem;
`

const FollowBtnStyled = styled.button`
  background-color: transparent;
  padding: .1rem .2rem;
  border: 1px solid gainsboro;
  //border-radius: .3rem;
  color: ${colors.blueColor};
  text-transform: uppercase;
  &:hover{
    transition: .1s;
    cursor: pointer;
    background-color: ${colors.backgroundThird};
  }
  &:active{
    cursor: pointer;
    background-color: transparent;
  }
`

const LikeBtnStyled = styled.button`
  padding: .1rem .2rem;
  color: ${colors.redColor};
  background-color: transparent;
  //border: none;
  border: 1px solid gainsboro;
  //border-radius: .3rem;
  text-transform: uppercase;
  &:hover{
    transition: .1s;
    cursor: pointer;
    background-color: ${colors.backgroundThird};
  }
  &:active{
    cursor: pointer;
    background-color: transparent;
  }
`
