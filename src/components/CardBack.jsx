

const CardBack = ({handleFlip, rarity, border}) => {

    //Creates a bg-color for all the types
    const cardRarity = border[rarity] || 'border-pikachu';

    return (
        <button onClick={handleFlip} className={`card backing bg-white ${cardRarity} h-[408px] w-[270px] mb-8 mx-4 relative flex flex-col justify-center border-8 rounded-xl p-8 items-center card-glow`}>
            <img src={`../src/assets/pokeballs/${rarity}-ball.png`} alt="" />
        </button>
    )
}

export default CardBack
