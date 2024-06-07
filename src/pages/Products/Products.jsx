import React, { useState, useEffect } from 'react';
import { FormContainer, ProductContainer, ProductsContainer, ProductsContainerStyled, ProductsWrapper } from './ProductsStyles';
import Categories from '../../components/Categories/Cateogories';
import Footer from '../../components/Footer/Footer';
import Section from '../../components/Section/Section';
import CardProduct from '../../components/CardProduct/CardProduct';
import BotonWhp from '../../components/BotonWhp/BotonWhp';
import axios from 'axios';

const Products = () => {
  const [categoryId, setCategoryId] = useState(null);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3001/productosMAIN')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  useEffect(() => {
    if (categoryId !== null) {
      axios.get(`http://localhost:3001/articulos/${categoryId}`)
        .then(response => {
          setProducts(response.data);
        })
        .catch(error => {
          console.error('Error fetching products:', error);
        });
    }
  }, [categoryId]);

  const handleSearch = () => {
    axios.get(`http://localhost:3001/buscar?q=${searchTerm}`)
      .then(response => {
        setProducts(response.data);
        setSearched(true);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  };

  return (
    <ProductsContainerStyled>
      <Categories onSelectCategory={setCategoryId} />
      <ProductsWrapper>
        <ProductsContainer>
          <Section>
            <h2>Productos</h2>
            <FormContainer>
              <input
                type="text"
                placeholder='Busque su producto aquí'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button onClick={handleSearch} disabled={!searchTerm}>Buscar</button>
            </FormContainer>
          </Section>
          <ProductContainer>
            {searched && products.length === 0 ? (
              <h1 style={{ color: 'black', textAlign: 'center' }}>No se han encontrado productos. Intente ingresar un nombre o referencia diferente.</h1>
            ) : (
              products.map(product => (
                <CardProduct
                  key={product.CODIGO_BARRA}
                  name={product.art_desc_vta}
                  price={product.PRECIO_SIN_IVA_4}
                  imageUrl={product.CODIGO_BARRA} // Usa la URL de la imagen si está disponible
                />
              ))
            )}
          </ProductContainer>
        </ProductsContainer>
        <BotonWhp />
      </ProductsWrapper>
      
    </ProductsContainerStyled>
  );
}

export default Products;
