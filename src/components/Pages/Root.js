import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from '../navigation/MainNavigation'

const Root = () => {
  return (
    <>
        <MainNavigation />
        <Outlet />
    </>
  )
}

export default Root