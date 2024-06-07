import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CardProductContainer, HomeContainerStyled, HomeWrapper, ViewMoreButton } from './HomeStyles';
import HeroSlider from '../../components/HeroSlider/HeroSlider';
import Hero from '../../components/Hero/Hero';
import Section from '../../components/Section/Section';
import CardProduct from '../../components/CardProduct/CardProduct';
import BotonWhp from '../../components/BotonWhp/BotonWhp';
import Footer from '../../components/Footer/Footer'; // Importar el Footer

const Home = ({ onAddToCart }) => {
  const [ofertas, setOfertas] = useState([]);
  const [destacados, setDestacados] = useState([]);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    axios.get('http://localhost:3001/articulosOF')
      .then(response => {
        setOfertas(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

    axios.get('http://localhost:3001/articulosDEST')
      .then(response => {
        setDestacados(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <HomeContainerStyled>
      <HomeWrapper>
        <Hero />
        <Section>
          <h2>Ofertas</h2>
          <CardProductContainer>
            {ofertas.map((articulo, index) => (
              <CardProduct
                key={index}
                name={articulo.art_desc_vta}
                price={articulo.PRECIO_SIN_IVA_4}
                imageUrl={articulo.CODIGO_BARRA} // Reemplaza con la URL de tu imagen
                off
                onAddToCart={onAddToCart}
              />
            ))}
          </CardProductContainer>
        </Section>
        <HeroSlider />
        <Section>
          <h2>Productos destacados</h2>
          <CardProductContainer>
            {destacados.map((articulo, index) => (
              <CardProduct
                key={index}
                name={articulo.art_desc_vta}
                price={articulo.PRECIO_SIN_IVA_4}
                imageUrl={articulo.CODIGO_BARRA} // Reemplaza con la URL de tu imagen
                onAddToCart={onAddToCart}
              />
            ))}
          </CardProductContainer>
          <ViewMoreButton to='/productos' onClick={scrollToTop}>Ver más</ViewMoreButton>
        </Section>
        <BotonWhp />
      </HomeWrapper>
      
    </HomeContainerStyled>
  );
};

export default Home;
