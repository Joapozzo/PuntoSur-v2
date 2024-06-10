import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContainerStyled, LoginWrapper, LeftContainer, RightContainer, FormGroup, StyledButton, Title, Subtitle, Input, RightImage, TitleRightContainer } from './LoginStyles';
import imgLogin from '../../assets/img/login-img/bg-blue.jpg';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {

  const errorMessage = () => {
    toast.error('Error durante el login')
  }

  const succesMessage = () => {
    toast.success('Solicitud aprobada')
  }

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/ajustes');
  };

  useEffect(() => {
    succesMessage()
  },[])

  return (
    <LoginContainerStyled>
      <LoginWrapper>
        <LeftContainer>
          <Title>Login</Title>
          <Subtitle>Bienvenido! Por favor, inicie sesión para continuar.</Subtitle>
          <FormGroup>
            <label htmlFor="username">Usuario</label>
            <Input type="text" id="username" placeholder="Ingrese su usuario" />
          </FormGroup>
          <FormGroup>
            <label htmlFor="password">Contraseña</label>
            <Input type="password" id="password" placeholder="Ingrese su contraseña" />
          </FormGroup>
          <StyledButton onClick={handleLogin}>Login</StyledButton>
        </LeftContainer>
        <RightContainer>
          <TitleRightContainer>
            <h2>Bienvenido! Somos PuntoSur</h2>
          </TitleRightContainer>
          <RightImage src={imgLogin} alt=''/>
        </RightContainer>
      </LoginWrapper>
      <Toaster/>
    </LoginContainerStyled>
  );
};

export default Login;
