import React, { useState, useEffect } from 'react'

const TradingCard = ({name, apiCall}) => {

  const [pokemon, setPokemon] = useState({});

  const catchOne = async () => {
    try {
        const response = await fetch(apiCall);

        const data = await response.json();

        setPokemon(data);

    } catch (error) {
        console.log(error);
    }
}

useEffect(() => {
    catchOne();
}, [])

  return (
    <div className='card flex flex-col justify-between border-8 border-pikachu rounded-xl p-8'>
      <header>
        <h1 className='text-4xl text-center capitalize'>{pokemon.name}</h1>
      </header>
      {pokemon.sprites && pokemon.sprites.other.showdown.front_default && (
        <img src={pokemon.sprites.other.showdown.front_default} alt="" />
      )}
    </div>
  )
}

export default TradingCard
