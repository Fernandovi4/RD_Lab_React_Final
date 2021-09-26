import React from 'react'
import styled from 'styled-components'
import ShowModuleContainer from '../../components/ShowsModule/ShowModuleContainer'

const Home = () => {

  return (
    <HomePageSt>

      < ShowModuleContainer title={'Go to "All shows"'} url={'/shows'} />
      < ShowModuleContainer title={'Go to "All people"'} url={'/people'} />

    </HomePageSt>
  )
}

export default Home

const HomePageSt = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  gap: 3rem;
  margin: 0 auto;
`