import React from 'react'
import { useState, useEffect } from 'react'
import TradingCard from './TradingCard';

const AllCards = ({pokemonData}) => {

    return (
        <div className='grid justify-center gap-10 grid-cols-3 grid-rows-3'>
            {pokemonData.map((pokemon, i) => (
                <TradingCard key={i} name={pokemon.name} apiCall={pokemon.url}/>
            ))}
        </div>
    )
}

export default AllCards
