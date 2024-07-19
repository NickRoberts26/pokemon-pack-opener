import React from 'react'
import Pack from '../components/Pack'

const PacksPage = ({pokemonData}) => {
  return (
    <div>
      <Pack pokemonData={pokemonData}/>
    </div>
  )
}

export default PacksPage
