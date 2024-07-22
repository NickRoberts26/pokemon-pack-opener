import React from 'react'

const CardBack = ({handleFlip, rarity, border}) => {

    //Creates a bg-color for all the types
    const cardRarity = border[rarity] || 'border-pikachu';

    return (
        <button onClick={handleFlip} className={`${cardRarity} flex items-center justify-center border-8 rounded-xl card-backing h-[408px] w-full bg-white`}>
            <img src={`src/assets/pokeballs/${rarity}-ball.png`} alt="" />
        </button>
    )
}

export default CardBack
