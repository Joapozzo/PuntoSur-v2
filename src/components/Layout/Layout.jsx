import React from 'react'
import { LayoutContainerStyled } from './LayoutStyles'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout = ({children}) => {
  return (
    <>
        <Navbar/>
        <LayoutContainerStyled>
            {children}
        </LayoutContainerStyled>
        <Footer/>
    </>

  )
}

export default Layout