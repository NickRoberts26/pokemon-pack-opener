import React, { useEffect, useState } from 'react'
import TradingCard from './TradingCard';

const Pack = ({pokemonData}) => {

    const [pack, setPack] = useState([]);
    const [openedPack, setOpenedPack] = useState(false);

    const values = ['bronze', 'silver', 'gold', 'diamond']
    const probabilities = [0.5, 0.3, 0.15, 0.05];

    const getRandomRarity = () => {
        const cumulativeProbabilities = probabilities.map((sum => value => sum += value)(0));
        const random = Math.random();
    
        for (let i = 0; i < cumulativeProbabilities.length; i++) {
          if (random < cumulativeProbabilities[i]) {
            return values[i];
          }
        }
    };
        
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
            { openedPack ? 
                <div className='pack-lineup w-full flex flex-wrap justify-center'>
                    {pack.map((pokemon, i) => (
                        <TradingCard key={i} apiCall={pokemon.url} rarity={pokemon.rarity} flipped={false}/>
                    ))}
                </div>
                :
                <div onClick={() => {setOpenedPack(true)}} className='card bg-gen-one w-[300px] h-[408px] relative flex flex-col justify-between border-8 rounded-xl p-8'>
                    Generation I
                </div>
            }
        </>
    )
}

export default Pack
