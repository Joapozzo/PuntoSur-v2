import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: ${(props) => (props.show ? 'flex' : 'none')};
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: auto;
  text-align: center;
  position: relative;

  @media (max-width: 768px) {
    width: 90%;
    padding: 15px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;

  h2 {
    margin: 0;
    font-size: 1.5rem;

    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }
`;

export const CloseButton = styled.span`
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  color: #dc3545;

  &:hover {
    color: #c82333;
  }
`;

export const ModalBody = styled.div`
  margin-bottom: 20px;

  p {
    color: gray;
    font-size: 1rem;

    @media (max-width: 768px) {
      font-size: 0.875rem;
    }
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;


  button {
    flex: 1;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-size: 1rem;

    @media (max-width: 768px) {
      padding: 8px;
      font-size: 0.875rem;
    }

    &:focus {
      outline: none;
    }
  }
`;

export const CancelButton = styled.button`
  background-color: #dc3545;
  color: white;

  &:hover {
    background-color: #c82333;
  }
`;

export const ConfirmButton = styled.button`
  background-color: #007bff;
  color: white;

  &:hover {
    background-color: #0056b3;
  }
`;
