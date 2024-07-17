import React from 'react'
import { useState, useEffect } from 'react'
import TradingCard from './TradingCard';

const AllCards = () => {

    const [allPokemon, setAllPokemon] = useState([]);

    const catchEmAll = async () => {
        try {
            const url = `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`

            const response = await fetch(url);

            const data = await response.json();

            setAllPokemon(data.results);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        catchEmAll();
    }, [])

    return (
        <div className='w-full grid gap-4 grid-cols-3 grid-rows-3'>
            {allPokemon.map((pokemon, i) => (
                <TradingCard key={i} name={pokemon.name} apiCall={pokemon.url}/>
            ))}
        </div>
    )
}

export default AllCards
