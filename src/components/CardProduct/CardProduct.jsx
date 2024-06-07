import React, { useState } from 'react';
import axios from 'axios';
import { ImgCustom, PriceOfferContainer, ProductContainerStyled, ProductFoot, ProductImgContainer, ProductInfoContainer, ProductQuantity, ProductTotalContainer, SuccessMessage } from './CardProductStlyes';
import { IoMdAdd } from "react-icons/io";
import { AiOutlineMinus } from "react-icons/ai";
import shopping from '../../assets/img/products-img/shopping.png'; // Imagen predeterminada

const CardProduct = ({ name, price, imageUrl, off, onAddToCart }) => {
    const [quantity, setQuantity] = useState(0);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrease = () => {
        setQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));
    };

    const handleAddToCart = (event) => {
        event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
        const total = Number(price) * quantity;
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const itemIndex = cart.findIndex(item => item.name === name);

        if (itemIndex >= 0) {
            cart[itemIndex].quantity += quantity;
            cart[itemIndex].total = cart[itemIndex].quantity * Number(price);
        } else {
            cart.push({ name, quantity, total, price: Number(price), CODIGO_BARRA: imageUrl });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        if (onAddToCart) {
            onAddToCart(quantity);
        }

        // Mostrar mensaje de éxito y restablecer la cantidad
        setShowSuccessMessage(true);
        setQuantity(0);
        setTimeout(() => {
            setShowSuccessMessage(false);
        }, 2000); // Mostrar el mensaje durante 2 segundos
    };

    const total = price * quantity;

    // Verifica si imageUrl es válido, si no, usa la imagen predeterminada
    const finalImageUrl = imageUrl ? `https://www.rsoftware.com.ar/imgart/${imageUrl}.png` : shopping;

    return (
        <ProductContainerStyled>
            {showSuccessMessage && <SuccessMessage>Producto agregado con éxito</SuccessMessage>}
            <ProductImgContainer>
                <ImgCustom src={finalImageUrl} alt={name} onError={(e) => { e.target.onerror = null; e.target.src = shopping; }} />
            </ProductImgContainer>
            <ProductInfoContainer>
                <h3>{name}</h3>
                <PriceOfferContainer>
                    {off && <p>$1.500</p>}
                    <span>${price}</span>
                </PriceOfferContainer>
                <ProductFoot>
                    <ProductQuantity>
                        <AiOutlineMinus onClick={handleDecrease} />
                        <span>{quantity}</span>
                        <IoMdAdd onClick={handleIncrease} />
                    </ProductQuantity>
                    {quantity > 0 && (
                        <ProductTotalContainer>
                            Total: ${total.toFixed(2)}
                        </ProductTotalContainer>
                    )}
                    <a href="#" onClick={handleAddToCart}>Agregar</a>
                </ProductFoot>
            </ProductInfoContainer>
        </ProductContainerStyled>
    );
};

export default CardProduct;
