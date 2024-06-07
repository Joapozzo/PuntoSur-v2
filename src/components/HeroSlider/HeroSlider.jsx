import React from 'react'
import { CustomImage, HeroContainerStyled, HeroWrapper } from './HeroSliderStyles'
import "react-image-gallery/styles/css/image-gallery.css";

import ImageGallery from 'react-image-gallery';
import cocaImage from '../../assets/img/hero-img/coca.jpg';
import arcorImage from '../../assets/img/hero-img/arcor.jpg';
import prittyImage from '../../assets/img/hero-img/pritty.jpg';

const HeroSlider = () => {

    const images = [
        {
            original: cocaImage
        },
        {
            original: arcorImage
        },
        {
            original: prittyImage
        },
    ]

  return (
    <HeroContainerStyled>
        <HeroWrapper>
        <ImageGallery
          items={images}
          showPlayButton={false}
          showFullscreenButton={false}
          showBullets={true}
          autoPlay={true}
          renderItem={(item) => (
            // Usa el componente de imagen personalizado para aplicar el estilo
            <CustomImage src={item.original} alt={item.originalAlt} />
          )}
        />
        </HeroWrapper>
    </HeroContainerStyled>
  )
}

export default HeroSlider