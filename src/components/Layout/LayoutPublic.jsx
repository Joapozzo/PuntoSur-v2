import React from 'react'
import { LayoutContainerStyled } from './LayoutStyles'

const LayoutPublic = ({children}) => {
  return (
    <LayoutContainerStyled>
        {children}
    </LayoutContainerStyled>
  )
}

export default LayoutPublic
