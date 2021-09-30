import React from 'react'
import styled from 'styled-components'
import SearHBarContainer from '../../components/SearchBar/SearсhBarContainer'
import PersonCardContainer from '../../components/PersonCard/PersonCardContainer'
import FiltrationPeopleForm from '../../components/FiltrationPeopleForm/FiltrationPeopleForm'

const Peoples = ({ people, handleFiltration }) => {

  const onFormSubmit = val => handleFiltration(val)

  return (
    <>
      <ControlsWrapperSt>
        <SearHBarContainer>Search</SearHBarContainer>
        <FiltrationPeopleForm onFormSubmit={onFormSubmit} people={people}/>
      </ControlsWrapperSt>
      <PeoplesPageSt>
        {people.length === 0 ?
          <h2>Nothing found with selected parameters!</h2> :
          people.map(el => {
            return <PersonCardContainer
              personId={el.id}
              name={el.name}
              imgUrl={el.imgUrl || 'https://via.placeholder.com/200x280/424242/000000?Text=No+Picture'}
              gender={el.gender}
              key={el.id}
            />
          })}
      </PeoplesPageSt>
    </>
  )
}

export default Peoples

const PeoplesPageSt = styled.div`
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