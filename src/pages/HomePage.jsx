import React from 'react'

const HomePage = () => {
  return (
    <div className='w-4/5 mb-auto mt-20'>
      <header className='flex justify-center text-center mb-10'>
        <div className='w-14 mx-4'>
          <img className='object-contain' src="\pokeball.png" alt="" />
        </div>
        <h1>Pokemon Pack Opener</h1>
        <div className='w-14 mx-4'>
          <img className='object-contain' src="\pokeball.png" alt="" />
        </div>
      </header>
      <div className='text-center text-3xl mb-20'>
        Choose a pack and try to get the highest score possible!<br/>
        The stronger the pokemon the more points they are worth.<br/>
        The better the card type rarity, the more points too!
      </div>
      <div className='border-2 p-6 p border-red rounded-2xl w-full'>
        <h2 className='text-4xl font-bold mb-8 text-center'>Card Types</h2>
        <div className='flex justify-between'>
          <div className='op w-1/5 flex flex-col items-center text-center'>
            <h2 className='text-3xl mb-2'>Bronze</h2>
            <img className='w-[90px] h-[90px]' src="/pokeballs/bronze-ball.png" alt="" />
            <p className='mt-4'>50%</p>
          </div>
          <div className='op w-1/5 flex flex-col items-center text-center'>
            <h2 className='text-3xl mb-2'>Silver</h2>
            <img className='w-[90px] h-[90px]' src="/pokeballs/silver-ball.png" alt="" />
            <p className='mt-4'>30%</p>
          </div>
          <div className='op w-1/5 flex flex-col items-center text-center'>
            <h2 className='text-3xl mb-2'>Gold</h2>
            <img className='w-[90px] h-[90px]' src="/pokeballs/gold-ball.png" alt="" />
            <p className='mt-4'>14%</p>
          </div>
          <div className='op w-1/5 flex flex-col items-center text-center'>
            <h2 className='text-3xl mb-2'>Diamond</h2>
            <img className='w-[90px] h-[90px]' src="/pokeballs/diamond-ball.png" alt="" />
            <p className='mt-4'>5%</p>
          </div>
          <div className='op w-1/5 flex flex-col items-center text-center'>
            <h2 className='text-3xl mb-2'>Cosmic</h2>
            <img className='w-[90px] h-[90px]' src="/pokeballs/cosmic-ball.png" alt="" />
            <p className='mt-4'>1%</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
