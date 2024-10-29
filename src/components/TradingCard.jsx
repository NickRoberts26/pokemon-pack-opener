import React, { useState, useEffect } from 'react'
import ReactCardFlip from 'react-card-flip';
import CardBack from './CardBack';

const TradingCard = ({apiCall, rarity, flipped, addScore}) => {

  const [pokemon, setPokemon] = useState({});
  const [types, setTypes] = useState([]);
  const [isFlipped, setIsFlipped] = useState(flipped);
  const [moves, setMoves] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //Creates a bg-color for all the types
  const rarityToBorderClass = {
    bronze: 'border-bronze',
    silver: 'border-silver',
    gold: 'border-gold',
    diamond: 'border-diamond',
    cosmic: 'border-cosmic cosmic-card'
  };
  const cardRarity = rarityToBorderClass[rarity] || 'border-pikachu';

  //Set the cards value
  const possibleScores = {
    bronze: Math.round(pokemon.exp / 6),
    silver: Math.round(pokemon.exp / 4),
    gold: Math.round(pokemon.exp / 2),
    diamond: Math.round(pokemon.exp / 1),
    cosmic: Math.round(pokemon.exp / 0.5)
  };
  const cardValue = possibleScores[rarity];

  //Randomly selects 4 elements from an array and returns them
  const getRandomElements = (arr) => {
    //Only select moves that can be learned by leveling
    const onlyLvl = arr.filter((item) => (
      item.version_group_details[0].move_learn_method.name == 'level-up'
    ))
    
    const shuffled = [...onlyLvl].sort(() => 0.5 - Math.random());
    setMoves(shuffled.slice(0, 4));
  };

  const handleFlip = (e) => {
    e.preventDefault();
    addScore(cardValue);
    setIsFlipped(prevState => !prevState);
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
          cosmic_image: data.sprites.other.showdown.front_shiny,
          type: data.types,
          exp: data.base_experience
        })

        getRandomElements(data.moves);
        setTypes(data.types.map((type) => (type.type.name)));
        setIsLoading(false);

    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
      catchOne();
  }, [])

  return (
    <>
      {isLoading ? <div className='h-[408px] w-[270px] mx-4 flex items-center justify-center'><img className='w-1/2 loading-spin' src="\pokeball.png" alt="" /></div> :
          <div className={`effect-layer ${cardRarity}`}>
          <ReactCardFlip isFlipped={isFlipped}>
            <CardBack handleFlip={handleFlip} rarity={rarity} border={rarityToBorderClass}/>
            <div className={`card ${cardRarity} bg-white h-[408px] w-[270px] mb-8 mx-4 relative flex flex-col justify-between border-8 rounded-xl px-6 pb-8 pt-12`}>
              <header>
                <h1 className='text-3xl text-center capitalize'>{pokemon.name}</h1>
                  <div className='absolute w-full top-2 left-0 px-2 flex items-center justify-between'>
                    <div className='flex'>
                      {types.map((type, i) => (
                        <div className='w-10 mr-1' key={i}>
                          <img src={`/type-icons/${type}_type.png`} alt="type" />
                        </div>
                      ))}
                    </div>
                    <div className='value border-2 border-black w-9 h-9 rounded-full flex items-center justify-center'>
                      {cardValue ? cardValue : pokemon.exp }
                    </div>
                  </div>
              </header>
              <div className='flex justify-center'>
                {pokemon.diamond_image && (
                  rarity ? <img className='object-contain w-3/5 max-h-[120px]' src={pokemon[`${rarity}_image`]} alt="" /> : <img className='object-contain w-3/5 max-h-[120px]' src={pokemon.gold_image} alt="" />
                )}
              </div>
              <div className='moves grid grid-cols-2 grid-rows-2'>
                {moves.map((move, i) => (
                  <p key={i} className='text-xs text-center capitalize border border-black rounded-full mx-1 my-1'>{move.move.name}</p>
                ))}
              </div>
            </div>
          </ReactCardFlip>
        </div>
      }
    </>
  )
}

export default TradingCard
