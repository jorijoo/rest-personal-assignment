import React from 'react'
import { LOCALIZATION } from '../constants/en_default'

const Home = () => {
  return (
    <div>
        <h1>{LOCALIZATION.HELLO} {LOCALIZATION.WORLD}!</h1>      
    </div>
  )
}

export default Home
