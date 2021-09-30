import React, { useEffect } from 'react'
import styled from 'styled-components'
import { FromFollowBtnSt, ToFavoriteBotton } from '../FormElements'
import { useSelector } from 'react-redux'
import { followedPeople } from '../../store/currentUserSlice'

const PersonCard = (
  {
    imgUrl,
    name,
    gender,
    personId,
    birthday,
    deathday,
    country,
    officialSite,
    handleClick,
    handleFollow,
    handleUnFollow,
  }) => {

  const followedPeoples = useSelector(followedPeople)
  let isThisPersonFollowed = followedPeoples.some(el => el === personId)
  useEffect(() => {
  }, [followedPeoples])

  return (
    <MovieCardSt>
      <ImgSt
        src={imgUrl}
        alt={`official poster of ${name}`}
        onClick={() => handleClick(personId)}
      />
      <CardInfoSt>
        <CardTextSt>
          <h3>{name}</h3>
          <GenresStyled>{gender}</GenresStyled>
        </CardTextSt>
        <CardControlsSt>
          {
            !isThisPersonFollowed ?
              <ToFavoriteBotton
                onClick={() => handleFollow()}
                title={'follow'}
              /> :
              <FromFollowBtnSt
                onClick={() => handleUnFollow()}
                title={'unfollow'}
              />
          }
          {/*<LikeBtnSt>Like ❤</LikeBtnSt>*/}
        </CardControlsSt>
      </CardInfoSt>
    </MovieCardSt>
  )
}

export default PersonCard

const MovieCardSt = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 200px;
  height: 400px;
  -webkit-transition: all .5s ease-out;

  &:hover {
    position: relative;
    transform: scale(1.03);
  }
`
const ImgSt = styled.img`
  width: 200px;

  &:hover {
    cursor: pointer;
  }
`

const CardInfoSt = styled.div`
  display: flex;
  justify-content: space-between;
  padding: .6rem 0;
`

const CardTextSt = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: flex-start;
  flex-basis: 60%;
`

const GenresStyled = styled.span`
  font-size: .7rem;
  color: gainsboro;
`

const CardControlsSt = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: flex-end;
  row-gap: .5rem;
`

// const btnStyle = {
//   'background-color': 'transparent',
//   'padding': '.1rem .2rem',
//   'border': '1px solid gainsboro',
//   'text-transform': 'uppercase',
// }


// const LikeBtnSt = styled.button`
//   color: ${colors.redColor};
//   ${btnStyle}
//   &:hover{
//     transition: .1s;
//     cursor: pointer;
//     background-color: ${colors.backgroundThird};
//   }
//   &:active{
//     cursor: pointer;
//     background-color: transparent;
//   }
// `

