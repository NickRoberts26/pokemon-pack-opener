import React, { useState, useEffect } from 'react'

const TradingCard = ({name, apiCall}) => {

  const [pokemon, setPokemon] = useState({});
  const [moveset, setMoveset] = useState([]);
  const [types, setTypes] = useState([]);

  //Creates a bg-color for all the types
  const typeToBgClass = {
    normal: 'bg-normal',
    fire: 'bg-fire',
    water: 'bg-water',
    electric: 'bg-electric',
    grass: 'bg-grass',
    ice: 'bg-ice',
    fighting: 'bg-fighting',
    poison: 'bg-poison',
    ground: 'bg-ground',
    flying: 'bg-flying',
    psychic: 'bg-psychic',
    bug: 'bg-bug',
    rock: 'bg-rock',
    ghost: 'bg-ghost',
    dragon: 'bg-dragon',
    dark: 'bg-dark',
    steel: 'bg-steel',
    fairy: 'bg-fairy'
  };
  const cardBg = typeToBgClass[pokemon.type] || 'bg-white-500';

  //Randomly selects 4 elements from an array and returns them
  const getRandomElements = (arr) => {
    //Only select moves that can be learned by leveling
    const onlyLvl = arr.filter((item) => (
      item.version_group_details[0].move_learn_method.name == 'level-up'
    ))
    
    const shuffled = [...onlyLvl].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  };

  //Api Call
  const catchOne = async () => {
    try {
        const response = await fetch(apiCall);

        const data = await response.json();

        setPokemon({
          name: data.name,
          bronze_image: data.sprites.front_default,
          silver_image: data.sprites.other.home.front_default,
          gold_image: data.sprites.other.showdown.front_default,
          diamond_image: data.sprites.other.showdown.front_shiny,
          type: data.types,
        })

        setMoveset(data.moves);

        setTypes(data.types.map((type) => (
          type.type.name
        )));

    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
      catchOne();
  }, [])

  //Creates the moveset for each Pokemon
  const randomMoves = getRandomElements(moveset);

  return (
    <div className={`card relative flex flex-col justify-between border-8 border-pikachu rounded-xl p-8 transform duration-500 hover:scale-[1.01]`}>
      <header>
        <h1 className='text-4xl text-center capitalize'>{pokemon.name}</h1>
          <div className='absolute top-2 left-2 flex items-center'>
            {types.map((type, i) => (
              <div className='w-10 mr-1' key={i}>
                <img src={`src/assets/type-icons/${type}_type.png`} alt="" />
              </div>
            ))}
          </div>
        <div className='w-10 absolute top-2 left-2 flex items-center'>
          {/*
            <img src={`src/assets/type-icons/${pokemon.type}_type.png`} alt="" />
            <span className='capitalize ml-2'>{pokemon.type}</span>
          */}
        </div>
      </header>
      <div className='flex justify-center h-64'>
        {pokemon.diamond_image && (
          <img className='object-contain' src={pokemon.gold_image} alt="" />
        )}
      </div>
      <div className='moves grid grid-cols-2 grid-rows-2'>
        {randomMoves.map((move, i) => (
          <p key={i} className='capitalize'>{move.move.name}</p>
        ))}
      </div>
    </div>
  )
}

export default TradingCard
