import React from 'react'
import { Outlet } from 'react-router-dom'

import NavBar from '../components/NavBar'

const MainLayout = () => {
    return (
    <>
        <NavBar />
        <div className='font-chakra max-w-[60%] m-auto'>
            <Outlet />
        </div>
    </>
    )
  
}

export default MainLayout