import React from 'react'
import { Link } from 'react-router-dom'

const PacksPage = () => {
  
  return (
    <>
      <header className='mb-10'>
        <h1>Choose a Pack</h1>
      </header>
      <div className='flex'>
        <Link to="gen-I">
          <div className={`card w-[300px] h-[408px] purple-shine relative flex flex-col items-center justify-center border-8 border-pikachu rounded-xl p-6 mx-4`}>
              <div className='w-3/4 mb-2'>
                  <img src="src/assets/pokemon_logo.png" alt="" />
              </div>
              <div className='mb-2'>
                  <img src={`src/assets/packs/gen_I_pack.png`} alt="" />
              </div>
              <div className='text-center text-black font-bold text-3xl'>
                  Generation I
              </div>
          </div>
        </Link>
        <Link to="gen-II">
          <div className={`card w-[300px] h-[408px] blue-shine relative flex flex-col items-center justify-center border-8 border-pikachu rounded-xl p-6 mx-4`}>
              <div className='w-3/4 mb-2'>
                  <img src="src/assets/pokemon_logo.png" alt="" />
              </div>
              <div className='mb-2'>
                  <img src={`src/assets/packs/gen_II_pack.png`} alt="" />
              </div>
              <div className='text-center text-black font-bold text-3xl'>
                  Generation II
              </div>
          </div>
        </Link>
        <Link to="gen-III">
          <div className={`card w-[300px] h-[408px] green-shine relative flex flex-col items-center justify-center border-8 border-pikachu rounded-xl p-6 mx-4`}>
              <div className='w-3/4 mb-2'>
                  <img src="src/assets/pokemon_logo.png" alt="" />
              </div>
              <div className='mb-2'>
                  <img src={`src/assets/packs/gen_III_pack.png`} alt="" />
              </div>
              <div className='text-center text-black font-bold text-3xl'>
                  Generation III
              </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default PacksPage
