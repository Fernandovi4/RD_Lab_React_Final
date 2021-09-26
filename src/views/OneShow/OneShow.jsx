import React, { useEffect } from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/constants/colorConstants'
import { fonts } from '../../utils/constants/fontsConstants'
import { useSelector } from 'react-redux'
import { FromFollowBtnSt, ToFavoriteBotton } from '../../components/FormElements'

const OneShow = ({ show, showId, handleFollow, handleUnFollow }) => {

  const favorites = useSelector((state) => state.currentUser.favoriteShows)
  let isThisShowFavorite = favorites.some(el => el === showId)
  useEffect(() => {
  }, [favorites])

  return (
    <>
      <OneShowWrapperSt>
        <OneShowInnerSt>
          <ImgWrapperSt>
            <Img
              src={show.originalImgUrl}
              alt={`official poster ot the ${show.name}`} />
          </ImgWrapperSt>
          <UlSt>
            <TitleSt>{show.name}</TitleSt>
            <Li><SpanSt>Title:</SpanSt> {show.name}</Li>
            <Li><SpanSt>Genres:</SpanSt> {[...show.genres.join(' / ')]}</Li>
            <Li><SpanSt>Average rating:</SpanSt> {show.rating}</Li>
            <Li><SpanSt>Runtime:</SpanSt> {show.runtime} min.</Li>
            <Li><SpanSt>Summary:</SpanSt>{show.summary}</Li>
            <Li><SpanSt>Official site:</SpanSt><A href={show.officialSite}> {show.officialSite}</A>
            </Li>
            {!isThisShowFavorite ?
              <ToFavoriteBotton
                onClick={() => handleFollow()}
                title={'follow'}
              /> :
              <FromFollowBtnSt
                onClick={() => handleUnFollow()}
                title={'unfollow'}
              />}
          </UlSt>
        </OneShowInnerSt>
      </OneShowWrapperSt>
    </>
  )
}

export default OneShow

const OneShowWrapperSt = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  row-gap: 1rem;
  //height: 80vh;
`

const OneShowInnerSt = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  column-gap: 2rem;
`

const ImgWrapperSt = styled.div`
  display: inline-block;
  overflow: hidden
`


const Img = styled.img`
  height: 85vh;
  transition: 1s;

  &:hover {
    transform: scale(1.1);

  }
`

const TitleSt = styled.h1`
  margin-bottom: 3rem;
`

const UlSt = styled.ul`
  color: ${colors.lightText};
  line-height: 2rem;
  flex-basis: 60%;
`

const Li = styled.li`
  list-style: none;
  color: ${colors.lightText};
  font-family: ${fonts.secondaryFont};
`

const SpanSt = styled.span`
  color: ${colors.blueColor};
  font-weight: bold;
`

const A = styled.a`
  color: ${colors.blueColor};
  text-decoration: underline;

  &:hover {
    color: ${colors.redColorHover};
    text-decoration: underline;
  }
`