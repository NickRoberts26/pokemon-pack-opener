import React from 'react'

const HomePage = () => {
  return (
    <div>
      <header className='flex justify-center text-center'>
        <div className='w-14 mx-4'>
          <img className='object-contain' src="src\assets\pokeball.png" alt="" />
        </div>
        <h1>2K Style Pokemon Pack Opener</h1>
        <div className='w-14 mx-4'>
          <img className='object-contain' src="src\assets\pokeball.png" alt="" />
        </div>
      </header>
      <div className='border-2 p-6 border-red rounded-2xl w-fit'>
        <h2 className='text-2xl'>Rarities</h2>
        <ul>
          <li>Bronze</li>
          <li>Silver</li>
          <li>Gold</li>
          <li>Diamond</li>
        </ul>
      </div>
    </div>
  )
}

export default HomePage
