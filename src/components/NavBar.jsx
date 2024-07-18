import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

  const linkClass = 'text-black px-8 h-fit';

  return (
    <div className='main-nav'>
      <nav className='flex items-center h-14 m-6 border-2 rounded-xl bg-white border-red'>
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
          className={linkClass}
        >
          Profile
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
