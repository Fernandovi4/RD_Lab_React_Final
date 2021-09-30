import React, { useEffect } from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/constants/colorConstants'
import { fonts } from '../../utils/constants/fontsConstants'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FromFollowBtnSt, ToFavoriteBotton } from '../../components/FormElements'
import { followedPeople } from '../../store/currentUserSlice'

const OnePerson = ({ person, personId, handleFollow, handleUnFollow }) => {

  const followed = useSelector(followedPeople)
  let isThisShowFavorite = followed.some(el => el === personId)
  useEffect(() => {
  }, [followed])

  return (
    <>
      {/*<OneShowWrapperSt>*/}
      <OneShowInnerSt>
        <ImgWrapperSt>
          <Img
            src={person.originalImgUrl}
            alt={`official poster ot the ${person.name}`} />
        </ImgWrapperSt>
        {/*<InfoWraperSt>*/}
        <UlSt>
          <NavLink to="/shows"><Span>&#10094;&#10094;&#10094;    Back </Span></NavLink>
          <TitleSt>{person.name}</TitleSt>
          <Li>
            <SpanSt>Title:</SpanSt>
            {person.name}
          </Li>
          <Li>
            <SpanSt>Gender:</SpanSt>
            {person.gender}
          </Li>
          <Li>
            <SpanSt>Country:</SpanSt>
            {person.country}
          </Li>
          <Li>
            <SpanSt>Birthday:</SpanSt>
            {person.birthday}
          </Li>
          <Li>
            <SpanSt>Deathday:</SpanSt>
            {person.deathday}
          </Li>
          <Li>
            <SpanSt>
              Official site:
            </SpanSt>
            <A href={person.officialSite}> {person.officialSite}</A>
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
          <Li>
            <NavLink to="/shows"><Span>&#10094;&#10094;&#10094;    Back</Span></NavLink>
          </Li>
        </UlSt>
        {/*</InfoWraperSt>*/}
      </OneShowInnerSt>
      {/*</OneShowWrapperSt>*/}
    </>
  )
}

export default OnePerson

// const OneShowWrapperSt = styled.div`
//   display: flex;
//   flex-flow: row wrap;
//   align-items: center;
//   row-gap: 1rem;
// `

const OneShowInnerSt = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: flex-start;
  column-gap: 2rem;
`

const ImgWrapperSt = styled.div`
  display: inline-block;
  overflow: hidden
`

// const InfoWraperSt = styled.div`
// display: flex;
//   flex-flow: column nowrap;
// `

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

const Span = styled.span`
  //position: relative;
  //top: -3rem;
  color: ${colors.blueColor};
    //border: 1px solid ${colors.blueColor};
  text-transform: uppercase;
  padding: 0.3rem 1rem 0.3rem 0.3rem;
  transition: .3s;
  margin-bottom: 3rem;

  &:hover {
    color: ${colors.lightText};
    cursor: pointer;
      //background-color: ${colors.blueColor};
  }
`