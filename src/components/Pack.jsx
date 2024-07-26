import React, { useEffect, useState } from 'react'
import TradingCard from './TradingCard';

const Pack = ({pokemonData}) => {

    const [pack, setPack] = useState([]);
    const [packScore, setPackScore] = useState(0);

    const values = ['bronze', 'silver', 'gold', 'diamond', 'cosmic']
    const probabilities = [0.50, 0.3, 0.14, 0.05, 0.01];

    const getRandomRarity = () => {
        const cumulativeProbabilities = probabilities.map((sum => value => sum += value)(0));
        const random = Math.random();
    
        for (let i = 0; i < cumulativeProbabilities.length; i++) {
          if (random < cumulativeProbabilities[i]) {
            return values[i];
          }
        }
    };

    const addScore = (rar) => {
        setPackScore(packScore + rar);
    }
        
    const generatePack = (arr) => {
        const shuffledPokemon = arr.sort(() => 0.5 - Math.random());
        let selected = shuffledPokemon.slice(0, 5);

        const addedRare = selected.map((card, i) => (
            {
                key: i,
                name: card.name,
                url: card.url,
                rarity: getRandomRarity(),
            }
        ))

        setPack(addedRare);
    }

    useEffect(() => {
        generatePack(pokemonData);
    }, [pokemonData]);

    return (
        <>
            <div className='flex justify-between items-center mx-4 mb-10'>
                <div className='text-3xl'>
                    Total Score: {packScore}
                </div>
                <div>
                    <button className='bg-white border border-red' onClick={() => { window.location.reload() }}>
                        New Pack
                    </button>
                </div>
            </div>
            <div className='pack-lineup w-full flex flex-wrap justify-center'>
                {pack.map((pokemon, i) => (
                    <TradingCard key={i} apiCall={pokemon.url} rarity={pokemon.rarity} flipped={false} addScore={addScore}/>
                ))}
            </div>
        </>
    )
}

export default Pack
