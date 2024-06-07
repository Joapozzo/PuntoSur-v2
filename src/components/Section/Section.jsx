import React from 'react'
import { SectionWrapper } from './SectionStyles'

const Section = ({children}) => {
    return (
        <SectionWrapper>
            {children}
        </SectionWrapper>
    )
}

export default Section