import React from 'react';
import { ModalContainer, ModalContent, CloseButton, ModalHeader, ModalBody, ModalFooter, CancelButton, ConfirmButton } from './ModalStyles';

const Modal = ({ closeModal, confirmAction, show }) => {
  return (
    <ModalContainer show={show}>
      <ModalContent>
        <ModalHeader>
          <h2>Confirmación de Ajustes</h2>
          <CloseButton onClick={closeModal}>&times;</CloseButton>
        </ModalHeader>
        <ModalBody>
          <p>¿Está seguro de confirmar los ajustes?</p>
        </ModalBody>
        <ModalFooter>
          <CancelButton onClick={closeModal}>Cancelar</CancelButton>
          <ConfirmButton onClick={confirmAction}>Confirmar</ConfirmButton>
        </ModalFooter>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
