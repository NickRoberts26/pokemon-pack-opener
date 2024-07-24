import React, { useState, useEffect } from 'react'
import ReactCardFlip from 'react-card-flip';
import CardBack from './CardBack';

const TradingCard = ({apiCall, rarity, img, flipped}) => {

  const [pokemon, setPokemon] = useState({});
  const [moveset, setMoveset] = useState([]);
  const [types, setTypes] = useState([]);
  const [isFlipped, setIsFlipped] = useState(flipped);

  //Creates a bg-color for all the types
  const rarityToBorderClass = {
    bronze: 'border-bronze',
    silver: 'border-silver',
    gold: 'border-gold',
    diamond: 'border-diamond'
  };
  const cardRarity = rarityToBorderClass[rarity] || 'border-pikachu';

  //Randomly selects 4 elements from an array and returns them
  const getRandomElements = (arr) => {
    //Only select moves that can be learned by leveling
    const onlyLvl = arr.filter((item) => (
      item.version_group_details[0].move_learn_method.name == 'level-up'
    ))
    
    const shuffled = [...onlyLvl].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  };

  const handleFlip = (e) => {
    e.preventDefault();
    setIsFlipped(prevState => !prevState);
  };

  //Api Call
  const catchOne = async () => {
    try {
        const response = await fetch(apiCall);

        const data = await response.json();

        console.log(data);

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
    <ReactCardFlip isFlipped={isFlipped}>
      <CardBack handleFlip={handleFlip} rarity={rarity} border={rarityToBorderClass}/>
      <div className={`card ${cardRarity} h-[408px] w-[270px] mb-8 mx-4 relative flex flex-col justify-between border-8 rounded-xl px-8 pb-8 pt-12`}>
        <header>
          <h1 className='text-3xl text-center capitalize'>{pokemon.name}</h1>
            <div className='absolute top-2 left-2 flex items-center'>
              {types.map((type, i) => (
                <div className='w-10 mr-1' key={i}>
                  <img src={`../src/assets/type-icons/${type}_type.png`} alt="" />
                </div>
              ))}
            </div>
        </header>
        <div className='flex justify-center'>
          {pokemon.diamond_image && (
            rarity ? <img className='object-contain w-3/5' src={pokemon[`${rarity}_image`]} alt="" /> : <img className='object-contain w-3/5' src={pokemon.gold_image} alt="" />
          )}
        </div>
        <div className='moves grid grid-cols-2 grid-rows-2'>
          {randomMoves.map((move, i) => (
            <p key={i} className='text-xs text-center capitalize border border-black rounded-full mx-1 my-1'>{move.move.name}</p>
          ))}
        </div>
      </div>
    </ReactCardFlip>
  )
}

export default TradingCard
