import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Logo, NavbarCartContainer, NavbarContainerStyled, NavbarItem, NavbarListContainer, NavbarListResponsive, NavbarListResponsiveContainer, NavbarWrapper } from './NavbarStyles';
import { IoMdCart } from "react-icons/io";
import { FaBars } from "react-icons/fa6";

const Navbar = ({ cartCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [totalCartCount, setTotalCartCount] = useState(cartCount);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalCount = cart.reduce((total, item) => total + item.quantity, 0);
    setTotalCartCount(totalCount);
  }, [cartCount]);

  const handleSetMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const scrollToContact = () => {
    const contactoSection = document.getElementById('contacto');
    if (contactoSection) {
      contactoSection.scrollIntoView({ behavior: 'smooth' });
    }
    if (menuOpen) {
      handleSetMenuOpen();
    }
  };

  return (
    <>
      <AnimatePresence>
        <NavbarContainerStyled id='navbar'>
            <NavbarWrapper>
                <FaBars 
                onClick={handleSetMenuOpen}
                className='menuBars'/>
                <Logo to="/" onClick={scrollToTop}>PuntoSur</Logo>
                <NavbarListContainer>
                    <NavbarItem to="/" onClick={scrollToTop}>Inicio</NavbarItem>
                    <NavbarItem to="/productos" onClick={scrollToTop}>Productos</NavbarItem>
                    <NavbarItem onClick={scrollToContact}>Contacto</NavbarItem>
                </NavbarListContainer>
                <NavbarCartContainer to="/checkout">
                    <IoMdCart/>
                    {totalCartCount > 0 && <span>{totalCartCount}</span>}
                </NavbarCartContainer>
            </NavbarWrapper>
        </NavbarContainerStyled>
        {
          menuOpen &&
          <NavbarListResponsiveContainer>
            <NavbarListResponsive>
                <NavbarItem to="/" onClick={() => { scrollToTop(); handleSetMenuOpen(); }}>Inicio</NavbarItem>
                <NavbarItem to="/productos" onClick={() => { scrollToTop(); handleSetMenuOpen(); }}>Productos</NavbarItem>
                <NavbarItem onClick={scrollToContact}>Contacto</NavbarItem>
            </NavbarListResponsive>
          </NavbarListResponsiveContainer>
        }
      </AnimatePresence>
    </>
  );
};

export default Navbar;
