import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './AuthorityComponent/Header'
const layout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
    </>
  )
}

export default layout
