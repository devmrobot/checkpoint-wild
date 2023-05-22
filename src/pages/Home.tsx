import React from 'react'
import Continents from '../components/Continents'

const Home = () => {
  return (
    <div className="flex justify-center flex-col flex-wrap">
      <h1 className="flex justify-center text-5xl font-bold p-10 text-[#576ce2]">DISCOVER THE WOLRD</h1>
      <Continents />
    </div>
  )
}

export default Home