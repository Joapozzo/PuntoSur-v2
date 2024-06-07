import React, { useState, useEffect } from 'react';
import { Categorie, CategoriesContainer, CategoriesContainerStyled, CategoriesTitle, CategoriesWrapper } from './Categories';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import CategoriesOpener from './CategoriesOpener';
import { AnimatePresence } from 'framer-motion';
import axios from 'axios';

const Categories = ({ onSelectCategory }) => {
  const [openCategories, setOpenCategories] = useState(true);
  const [categories, setCategories] = useState([]);

  const handleOpenCategories = () => {
    setOpenCategories(!openCategories);
  };

  useEffect(() => {
    axios.get('http://localhost:3001/categorias')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  return (
    <>
      <AnimatePresence>
        {!openCategories && (
          <CategoriesContainerStyled
            initial={{ translateX: -1000 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: -1000, opacity: 0 }}
            transition={{ type: "spring", damping: 27 }}
            key="menu-categories"
          >
            <CategoriesWrapper>
              <CategoriesTitle>
                <FaArrowLeft onClick={handleOpenCategories} />
                <h3>Categorias</h3>
              </CategoriesTitle>
              <CategoriesContainer>
                {categories.map(category => (
                  <Categorie key={category.id_clasif} onClick={() => onSelectCategory(category.id_clasif)}>
                    <a href={`#${category.id_clasif}`}>{category.NOM_CLASIF}</a>
                    <FaArrowRight />
                  </Categorie>
                ))}
              </CategoriesContainer>
            </CategoriesWrapper>
          </CategoriesContainerStyled>
        )}
        {openCategories && (
          <CategoriesOpener onClick={handleOpenCategories} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Categories;
