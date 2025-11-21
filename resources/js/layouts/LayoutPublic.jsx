import React from 'react'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const LayoutPublic = () => {
  return (
    <>
      <TopBar/>
        <Outlet/>
      <Footer/>
    </>
  )
}

export default LayoutPublic