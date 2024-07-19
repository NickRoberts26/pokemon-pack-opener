import React from 'react'
import AllCards from '../components/AllCards'

const FullCollectionPage = ({pokemonData}) => {
  return (
    <div>
      <header className='text-center mb-8'>
        <h1>Available Pokemon</h1>
      </header>
      <AllCards pokemonData={pokemonData}/>
    </div>
  )
}

export default FullCollectionPage
