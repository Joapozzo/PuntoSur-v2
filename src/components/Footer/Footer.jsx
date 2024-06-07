import React from 'react'
import { ContactoContainer, FooterBottom, FooterContainerStyled, FooterWrapper, ItemContacto, NavFootContainer } from './FooterStyles'
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <FooterContainerStyled id='contacto'>
        <FooterWrapper>
            <h2>PuntoSur</h2>
            <NavFootContainer>
                <a href="">Inicio</a>
                <a href="">Productos</a>
                <a href="">Contacto</a>
            </NavFootContainer>
            <ContactoContainer>
                <h2>Contacto</h2>
                <ItemContacto>
                    <FaInstagram />
                    <a>PuntoSur</a>
                </ItemContacto>
                <ItemContacto>
                    <IoMailOutline/>
                    <a>puntosur@gmail.com</a>
                </ItemContacto>
                <ItemContacto>
                    <FaWhatsapp />
                    <a>0351 222-9590</a>
                </ItemContacto>
            </ContactoContainer>
            <ContactoContainer>
                <h2>Horarios de atención</h2>
                <p>Lunes a jueves: 8:00 am - 1:00 pm</p>
                <p>Viernes: 8:00 am - 2:00 pm</p>
                <p>Sábado: 9:00 am - 2:00 pm</p>
                <p>Domingo: 9:00 am - 1:00 pm</p>
            </ContactoContainer>
        </FooterWrapper>
        <FooterBottom>
            <p>PuntoSur Multimercado. Todos los derechos reservados. 2023</p>
        </FooterBottom>
    </FooterContainerStyled>
  )
}

export default Footer