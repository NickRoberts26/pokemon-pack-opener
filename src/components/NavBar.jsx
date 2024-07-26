import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

  const linkClass = 'text-black text-2xl font-chakra px-8 h-fit';

  return (
    <div className='main-nav flex justify-center p-6'>
      <nav className='flex w-[80%] items-center justify-center h-14 border-2 rounded-xl bg-white border-red'>
        <NavLink
          to='/'
          className={linkClass}
        >
          Home
        </NavLink>
        <NavLink
          to='/all'
          className={linkClass}
        >
          View All
        </NavLink>
        <NavLink
        to='/packs'
          className={linkClass}
        >
          Packs
        </NavLink>
        
      </nav>
    </div>
  )
}

export default NavBar
