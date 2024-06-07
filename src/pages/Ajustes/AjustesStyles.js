import styled from 'styled-components';
import imgLogin from '../../assets/img/login-img/bg-blue.jpg';

export const AjustesContainerStyled = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    background: url(${imgLogin}) no-repeat center center fixed;
    background-size: cover;

    @media (max-width: 768px) {
        padding: 10px;
    }
`;

export const AjustesWrapper = styled.div`
    width: 70%;
    max-width: 600px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    padding: 20px;

    @media (max-width: 768px) {
        width: 100%;
        padding: 15px;
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const FormGroup = styled.div`
    margin-bottom: 20px;

    label {
        display: block;
        margin-bottom: 8px;
        font-weight: bold;
        color: #343a40;

        @media (max-width: 768px) {
            font-size: 14px;
        }
    }
`;

export const Input = styled.input`
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #ced4da;
    border-radius: 5px;
    margin-bottom: 20px;
    font-size: 16px;
    background-color: #f8f9fa;

    @media (max-width: 768px) {
        padding: 10px;
        font-size: 14px;
        margin-bottom: 15px;
    }

    &:focus {
        outline: none;
        border-color: #007bff;
        box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
    }
`;

export const Select = styled.select`
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #ced4da;
    border-radius: 5px;
    margin-bottom: 20px;
    font-size: 16px;
    background-color: #f8f9fa;

    @media (max-width: 768px) {
        padding: 10px;
        font-size: 14px;
        margin-bottom: 15px;
    }

    &:focus {
        outline: none;
        border-color: #007bff;
        box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
`

export const StyledButton = styled.button`
    width: 50%;
    padding: 15px;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    @media (max-width: 768px) {
        padding: 10px;
        font-size: 16px;
    }

    &:hover {
        background-color: #0056b3;
    }

    &:active {
        background-color: #004085;
    }
`;

export const BackButton = styled.button`
    width: 50%;
    padding: 15px;
    background-color: #6c757d;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    @media (max-width: 768px) {
        padding: 10px;
        font-size: 16px;
    }

    &:hover {
        background-color: #495057;
    }

    &:active {
        background-color: #343a40;
    }
`;

export const Title = styled.h1`
    font-size: 36px;
    text-align: center;
    color: #343a40;
    font-weight: 700;
    span {
        color: var(--blue);
        font-weight: 700;
    }

    @media (max-width: 768px) {
        font-size: 28px;
    }
`;

export const Subtitle = styled.p`
    margin-bottom: 40px;
    font-size: 18px;
    text-align: center;
    color: #6c757d;

    @media (max-width: 768px) {
        font-size: 16px;
        margin-bottom: 30px;
    }
`;
