import React from 'react'
import styled from 'styled-components'
import ShowModuleContainer from '../../components/ShowsModule/ShowModuleContainer'

const Home = ({shows,people}) => {

  return (
    <HomePageSt>

      < ShowModuleContainer
        items={shows}
        title={'PRESS TO Go to "All shows". . .'}
        url={'/shows'}
        identifier={'shows'}
      />
      < ShowModuleContainer
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