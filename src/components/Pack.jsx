import React, { useEffect, useState } from 'react'
import TradingCard from './TradingCard';

const Pack = ({pokemonData}) => {

    const [pack, setPack] = useState([]);
    const [rarities, setRarities] = useState(
        ['bronze', 'silver', 'gold', 'diamond']
    );
    const probabilities = [0.5, 0.3, 0.15, 0.05];

    const getRandomRarity = () => {
        const cumulativeProbabilities = probabilities.map((sum => value => sum += value)(0));
        const random = Math.random();
    
        for (let i = 0; i < cumulativeProbabilities.length; i++) {
          if (random < cumulativeProbabilities[i]) {
            return rarities[i];
          }
        }
    };

    const generatePack = (arr, rarity) => {
        const shuffledPokemon = arr.sort(() => 0.5 - Math.random());
        let selected = shuffledPokemon.slice(0, 5);

        const addedRare = selected.map((card, i) => (
            {
                key: i,
                name: card.name,
                url: card.url,
                poop: rarity,
            }
        ))

        setPack(addedRare);
    }

    useEffect(() => {
        generatePack(pokemonData, getRandomRarity());
    }, [pokemonData]);

    console.log(pack);

    return (
        <div className='pack-lineup grid justify-center gap-10 grid-cols-5 grid-rows-1'>
            {pack.map((pokemon, i) => (
                <TradingCard key={i} name={pokemon.name} apiCall={pokemon.url}/>
            ))}
        </div>
    )
}

export default Pack