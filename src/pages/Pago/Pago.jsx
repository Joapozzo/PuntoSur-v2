import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  ButtonPay, ButtonEditPay, FormLabel, InputsContainer, OptGroup, PagoContainerStyled,
  PagoForm, PagoFormContainer, PagoWrapper, Product, ProductContainer, ProductImg,
  ProductItems, ProductListWrapper, ProductsListContainer, Step, StepOne, StepThree,
  TextContainer
} from './PagoStyles';
import { CiCircleCheck } from "react-icons/ci";
import shopping from '../../assets/img/products-img/shopping.png';

const Pago = () => {
  const [cartItems, setCartItems] = useState([]);
  const [shippingCost, setShippingCost] = useState(0);
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const [addressOptions, setAddressOptions] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
  }, []);

  const subtotal = cartItems.reduce((acc, item) => acc + item.total, 0);
  const total = subtotal + shippingCost;

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleCalculateShipping = async () => {
    setError('');
    if (address.trim()) {
      try {
        const formattedAddress = address.replace(/ /g, '+').replace(/,/g, '%2C');
        const response = await axios.post('http://localhost:3001/calculateShipping', { address: formattedAddress });
        if (response.data.results.length > 1) {
          setAddressOptions(response.data.results);
        } else {
          setShippingCost(response.data.shippingCost);
        }
      } catch (error) {
        console.error('Error al calcular el costo de envío:', error);
        if (error.response && error.response.data) {
          console.error('Error Response Data:', error.response.data);
        }
        setError('No se pudo calcular el costo de envío. Verifica la dirección ingresada.');
      }
    } else {
      setError('Por favor, ingresa una dirección válida.');
    }
  };

  const handleAddressSelection = async (selected) => {
    setSelectedAddress(selected);
    try {
      const response = await axios.post('http://localhost:3001/calculateShipping', { address: selected.formatted });
      setShippingCost(response.data.shippingCost);
      setAddressOptions([]);
    } catch (error) {
      console.error('Error al calcular el costo de envío:', error);
      setError('No se pudo calcular el costo de envío. Verifica la dirección ingresada.');
    }
  };

  const handleConfirmOrder = async () => {
    try {
      const response = await axios.post('http://localhost:3001/create_preference', {
        cartItems,
        shippingCost,
        name: 'Nombre del cliente', // Puedes agregar un campo para esto
        email: 'email@cliente.com', // Puedes agregar un campo para esto
        address: selectedAddress ? selectedAddress.formatted : address
      });

      const { id } = response.data;
      window.location.href = `https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=${id}`;
    } catch (error) {
      console.error('Error al confirmar el pedido:', error);
      setError('No se pudo confirmar el pedido. Intenta nuevamente.');
    }
  };

  return (
    <PagoContainerStyled>
      <PagoWrapper>
        <Step>
          <StepOne><CiCircleCheck /> Elegir productos</StepOne>
          <StepOne><CiCircleCheck /> Agregar al carrito</StepOne>
          <StepThree><CiCircleCheck /> Confirmar pedido</StepThree>
        </Step>
        <PagoFormContainer>
          <PagoForm>
            <h3>Formulario de pago</h3>
            <InputsContainer>
              <FormLabel>
                Nombre
                <input type="text" />
              </FormLabel>
              <FormLabel>
                Teléfono
                <input type="text" />
              </FormLabel>
              <FormLabel>
                Email
                <input type="text" />
              </FormLabel>
              <FormLabel>
                Forma de entrega
                <OptGroup>
                  <input type="radio" name="pago" value="delivery" />
                  <p>Envío por delivery</p>
                </OptGroup>
                <OptGroup>
                  <input type="radio" name="pago" value="local" />
                  <p>Retiro en el local</p>
                </OptGroup>
              </FormLabel>
              <FormLabel>
                Dirección
                <input type="text" value={address} onChange={handleAddressChange} placeholder="Ej: Chacabuco 635, Córdoba, Argentina" />
                <button
                  type="button"
                  onClick={handleCalculateShipping}
                  style={{
                    marginLeft: '10px',
                    backgroundColor: 'blue',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '5px 10px',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}
                >
                  Calcular envío
                </button>
                <p style={{ display: 'inline', marginLeft: '10px' }}>
                  {shippingCost > 0 ? `Costo de envío: $${shippingCost.toFixed(2)}` : ''}
                </p>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {addressOptions.length > 0 && (
                  <div>
                    <h4>Seleccione la dirección correcta:</h4>
                    <ul>
                      {addressOptions.map((option, index) => (
                        <li key={index} onClick={() => handleAddressSelection(option)} style={{ cursor: 'pointer', color: 'blue' }}>
                          {option.formatted}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </FormLabel>
              <FormLabel>
                ¿Es un departamento?
                <OptGroup>
                  <input type="radio" name="departamento" value="si" />
                  <p>Si</p>
                </OptGroup>
                <OptGroup>
                  <input type="radio" name="departamento" value="no" />
                  <p>No</p>
                </OptGroup>
              </FormLabel>
              <FormLabel>
                Método de pago
                <OptGroup>
                  <input type="radio" name="metodo_pago" value="efectivo" />
                  <p>Efectivo</p>
                </OptGroup>
                <OptGroup>
                  <input type="radio" name="metodo_pago" value="mercado_pago" />
                  <p>Mercado pago / Tarjeta de crédito/débito</p>
                </OptGroup>
              </FormLabel>
              <FormLabel>
                Nota para el local
                <input type="text" />
              </FormLabel>
            </InputsContainer>
          </PagoForm>
          <ProductsListContainer>
            <h3>Listado del pedido</h3>
            <ProductListWrapper>
              <p>{cartItems.length} items</p>
              <ProductContainer>
                {cartItems.map((item, index) => (
                  <Product key={index}>
                    <ProductImg>
                      <img src={`https://www.rsoftware.com.ar/imgart/${item.CODIGO_BARRA}.png`} alt={item.name} onError={(e) => { e.target.onerror = null; e.target.src = shopping; }} />
                    </ProductImg>
                    <ProductItems>
                      <h4>${item.total.toFixed(2)}</h4>
                      <p>{item.name}</p>
                      <span>Cantidad: {item.quantity}</span>
                    </ProductItems>
                  </Product>
                ))}
              </ProductContainer>
            </ProductListWrapper>
            <TextContainer>
              <p>Subtotal</p>
              <span>${subtotal.toFixed(2)}</span>
            </TextContainer>
            <TextContainer>
              <p>Envío</p>
              <span>${shippingCost.toFixed(2)}</span>
            </TextContainer>
            <TextContainer>
              <h3>Total</h3>
              <h3>${total.toFixed(2)}</h3>
            </TextContainer>
            <ButtonPay onClick={handleConfirmOrder}>Confirmar pedido</ButtonPay>
            <ButtonEditPay to='/checkout'>Editar Carrito</ButtonEditPay>
          </ProductsListContainer>
        </PagoFormContainer>
      </PagoWrapper>
    </PagoContainerStyled>
  );
};

export default Pago;
