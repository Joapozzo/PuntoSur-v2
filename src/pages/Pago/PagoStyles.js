import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const PagoContainerStyled = styled.div`
  width: 100%;
  padding: 100px 30px;
`;

export const PagoWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 100%;
`;

export const PagoFormContainer = styled.form`
  display: flex;
  gap: 20px;
  width: 90%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const PagoForm = styled.div`
  display: flex;
  padding: 30px;
  width: 55%;
  flex-direction: column;
  align-items: start;
  gap: 20px;
  border: 1px solid transparent;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Borde con efecto de desenfoque */

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  h3 {
    color: var(--gray-500);
    font-weight: bold;
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  color: var(--gray-200);
  gap: 10px;

  input[type="text"] {
    padding: 10px;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    width: 100%;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &:focus {
      border-color: #80bdff;
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
  }

  input[type="radio"] {
    margin-right: 5px;

    &:checked + p {
      color: #007bff;
      font-weight: bold;
    }
  }
`;

export const OptGroup = styled.label`
  display: flex;
  color: var(--gray-200);
  gap: 15px;
  align-items: center;
  width: 50%;
  font-size: 14px;
`;

export const ProductsListContainer = styled.div`
  display: flex;
  padding: 30px;
  width: 45%;
  flex-direction: column;
  align-items: start;
  gap: 20px;
  border: 1px solid transparent;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  h3 {
    color: var(--gray-500);
    font-weight: bold;
  }
`;

export const ProductListWrapper = styled.div`
  width: 100%;
  gap: 10px;
  display: flex;
  flex-direction: column;

  p {
    color: var(--gray-200);
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 500px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Product = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  align-items: start;
  border: 1px solid transparent;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 10px;
`;

export const ProductImg = styled.div`
  width: 20%;
  max-width: 20%;
  background-color: #fafafa;

  img {
    width: 100%;
    height: auto;
  }
`;

export const ProductItems = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  color: red;

  h4 {
    font-weight: bold;
    font-size: 15px;
    color: var(--gray-300);
  }

  p {
    font-size: 15px;
    color: var(--gray-300);
  }

  span {
    font-size: 13px;
    color: var(--gray-200);
  }
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 5px;
  color: var(--gray-200);
`;

export const ButtonBase = styled(NavLink)`
  width: 100%;
  padding: 10px 20px;
  color: #fff;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  margin-top: 10px;

  &:hover {
    text-decoration: none;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

export const ButtonPay = styled(ButtonBase)`
  background-color: var(--blue);

  &:hover {
    background-color: #0056b3;
    border-color: #0056b3;
  }
`;

export const ButtonEditPay = styled(ButtonBase)`
  background-color: #dc3545; /* Color rojo */

  &:hover {
    background-color: #c82333;
    border-color: #c82333;
  }
`;

export const Step = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  color: var(--gray-500);

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

export const StepOne = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  width: 100%;
  min-height: 60px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    text-align: center;
  }
`;

export const StepThree = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: var(--blue);
  font-size: 18px;
  width: 100%;
  min-height: 60px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    text-align: center;
  }
`;
