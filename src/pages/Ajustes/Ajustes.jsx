import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  AjustesContainerStyled, 
  AjustesWrapper, 
  FormGroup, 
  Input, 
  Select, 
  StyledButton, 
  Title, 
  Subtitle, 
  BackButton, 
  TitleContainer, 
  ButtonsContainer 
} from './AjustesStyles';
import Modal from './Modal';

const Ajustes = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleConfirm = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleModalConfirm = () => {
    closeModal();
    navigate('/'); // Redirecciona a la página principal
  };

  return (
    <AjustesContainerStyled>
      <AjustesWrapper>
        <TitleContainer>
          <Title>Punto<span>Sur</span></Title>
          <Subtitle>Ajustes</Subtitle>
        </TitleContainer>
        <FormGroup>
          <label htmlFor="storeAddress">Dirección de la Tienda:</label>
          <Input type="text" id="storeAddress" placeholder="Ingrese la dirección de la tienda" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="mercadoPagoToken">Token de Mercado Pago:</label>
          <Input type="text" id="mercadoPagoToken" placeholder="Ingrese el token de Mercado Pago" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="iva">IVA:</label>
          <Select id="iva">
            <option value="0">IVA 0%</option>
            <option value="21">IVA 21%</option>
          </Select>
        </FormGroup>
        <ButtonsContainer>
          <BackButton onClick={() => navigate('/login')}>Volver</BackButton>
          <StyledButton onClick={handleConfirm}>Confirmar</StyledButton>
        </ButtonsContainer>
      </AjustesWrapper>
      <Modal 
        closeModal={closeModal} 
        confirmAction={handleModalConfirm} 
        show={showModal}
      />
    </AjustesContainerStyled>
  );
};

export default Ajustes;
