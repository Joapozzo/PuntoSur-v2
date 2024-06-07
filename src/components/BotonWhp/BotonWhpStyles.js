import styled from "styled-components";

export const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25d366;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 15px;
  cursor: pointer;
  font-size: 50px;
  display: flex;
  align-items: center;
  gap: 5px;
  z-index: 100;

  &:hover {
    transition: all .4s ease; 
    background-color: #128c7e;
  }
`;
