import React, { useState, useEffect } from 'react';
import { CheckoutContainerStyles, CheckoutWrapper, CheckoutTable, TableHeader, TableRow, TableCell, QuantityInput, DeleteButton, TotalCell, CheckoutData, ButtonContainer, ButtonPay, ButtonSearch, CheckProductsContainer, EnviromentTable, ContainerOutsideTable, ViewMoreButton } from './ChekoutStyles';
import { VscError } from "react-icons/vsc";
import Section from '../../components/Section/Section';
import CardProduct from '../../components/CardProduct/CardProduct';
import BotonWhp from '../../components/BotonWhp/BotonWhp';
import axios from 'axios';
import Modal from 'react-modal';

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  useEffect(() => {
    try {
      const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
      const updatedCart = storedCart.map(item => ({
        ...item,
        price: Number(item.price),
        total: Number(item.total),
      }));
      setCart(updatedCart);
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
    }

    axios.get('http://localhost:3001/artCHECKOUT')
      .then(response => {
        setRelatedProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching related products:', error);
      });
  }, []);

  const handleDelete = (index) => {
    setItemToDelete(index);
    setModalIsOpen(true);
  };

  const confirmDelete = () => {
    const updatedCart = cart.filter((_, i) => i !== itemToDelete);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setModalIsOpen(false);
    setItemToDelete(null);
  };

  const cancelDelete = () => {
    setModalIsOpen(false);
    setItemToDelete(null);
  };

  const handleQuantityChange = (index, quantity) => {
    if (quantity > 30) {
      quantity = 30;
    }
    const updatedCart = cart.map((item, i) => {
      if (i === index) {
        return { ...item, quantity, total: item.price * quantity };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const totalAmount = cart.reduce((total, item) => total + item.total, 0);

  return (
    <CheckoutContainerStyles>
      <CheckoutWrapper>
        <Section>
          <h2>Listado del pedido</h2>
          <CheckoutData>
            <EnviromentTable>
              <CheckoutTable>
                <thead>
                  <tr>
                    <TableHeader>Producto</TableHeader>
                    <TableHeader>Precio</TableHeader>
                    <TableHeader>Cantidad</TableHeader>
                    <TableHeader>Subtotal</TableHeader>
                    <TableHeader>Eliminar</TableHeader>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>${item.price.toFixed(2)}</TableCell>
                      <TableCell>
                        <QuantityInput 
                          type="number" 
                          value={item.quantity} 
                          min="1" 
                          max="30" 
                          onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                        />
                      </TableCell>
                      <TableCell>${item.total.toFixed(2)}</TableCell>
                      <TableCell>
                        <DeleteButton onClick={() => handleDelete(index)}> <VscError /> </DeleteButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </tbody>
              </CheckoutTable>
            </EnviromentTable>
            <ContainerOutsideTable>
              <TotalCell>Total: ${totalAmount.toFixed(2)}</TotalCell>
              <ButtonContainer>
                <ButtonPay to='/pago'>Pagar</ButtonPay>
                <ButtonSearch to='/productos'>Seguir comprando</ButtonSearch>
              </ButtonContainer>
            </ContainerOutsideTable>
          </CheckoutData>
        </Section>
        <Section>
          <h2>Productos Relacionados</h2>
          <CheckProductsContainer>
            {relatedProducts.map((product, index) => (
              <CardProduct
                key={index}
                name={product.art_desc_vta}
                price={product.PRECIO_SIN_IVA_4}
                imageUrl={product.CODIGO_BARRA}
              />
            ))}
          </CheckProductsContainer>
          <ViewMoreButton to='/productos'>Ver más</ViewMoreButton>
        </Section>
        <BotonWhp />
      </CheckoutWrapper>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={cancelDelete}
        contentLabel="Confirm Delete"
        ariaHideApp={false}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
          }
        }}
      >
        <h2 style={{ color: '#333', marginBottom: '20px' }}>¿Estás seguro que deseas eliminar este artículo?</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button 
            onClick={confirmDelete} 
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Sí
          </button>
          <button 
            onClick={cancelDelete} 
            style={{
              padding: '10px 20px',
              backgroundColor: '#6c757d',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            No
          </button>
        </div>
      </Modal>
    </CheckoutContainerStyles>
  );
};

export default Checkout;
