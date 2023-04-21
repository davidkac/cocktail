import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from '../navigation/MainNavigation'

const Root = () => {
  return (
    <> 
       <header>
        <MainNavigation />
       </header>
      <main>
        <Outlet />
        </main>
    </>
  )
}

export default Root;