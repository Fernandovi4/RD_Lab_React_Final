import React from 'react'
import styled from 'styled-components'
import RandomCardsModuleContainer from '../../components/RandomCardsModule/RandomCardsModuleContainer'

const Home = ({shows,people}) => {

  return (
    <HomePageSt>

      < RandomCardsModuleContainer
        items={shows}
        title={'PRESS TO Go to "All shows". . .'}
        url={'/shows'}
        identifier={'shows'}
      />
      < RandomCardsModuleContainer
        items={people}
        title={`PRESS TO Go to "All people". . .`}
        url={'/people'}
        identifier={'people'}
      />

    </HomePageSt>
  )
}

export default Home

const HomePageSt = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
  //gap: 1rem;
  margin: 0 auto;
`