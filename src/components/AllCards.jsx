import React from 'react'
import { useState, useEffect } from 'react'
import TradingCard from './TradingCard';

// Get pokemons number from api call
const extractNumberFromUrl = (url) => {
    const match = url.match(/\/(\d+)\/$/);
    return match ? parseInt(match[1], 10) : null;
};
  
// Comparator function to sort based on the number extracted from the URL
const compareByNumberInUrl = (a, b) => {
    const numA = extractNumberFromUrl(a.url);
    const numB = extractNumberFromUrl(b.url);

    return numA - numB;
};

const AllCards = ({pokemonData}) => {

    pokemonData.sort(compareByNumberInUrl);
    
    return (
        <div className='grid justify-center gap-10 grid-cols-3 grid-rows-3'>
            {pokemonData.map((pokemon, i) => (
                <TradingCard key={i} name={pokemon.name} apiCall={pokemon.url} flipped={true}/>
            ))}
        </div>
    )
}

export default AllCards
