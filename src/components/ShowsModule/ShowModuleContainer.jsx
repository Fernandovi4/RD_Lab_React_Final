import React, { useEffect, useState } from 'react'
import Loader from '../Loader/Loader'
import ShowsModule from './ShowsModule'

const ShowModuleContainer = ({ title, url, items, identifier }) => {


  const [randomItems, setRandomItems] = useState([])

  useEffect(() => {

    items.length !== 0 &&
    setRandomItems([...items]
      .sort(() => Math.random() - Math.random()).slice(0, 6))
  }, [items])


  return !randomItems ?
    <Loader /> :
    // <h1>hello</h1>
    <ShowsModule
      items={randomItems}
      title={title}
      url={url}
      identifier={identifier}
    />

}

export default ShowModuleContainer