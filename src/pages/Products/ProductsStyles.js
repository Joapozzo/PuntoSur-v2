// productsStyles.js
import styled from "styled-components";

export const ProductsContainerStyled = styled.main`
    width: 100%;
    padding-top: 60px;
    position: relative;
`;

export const ProductsWrapper = styled.section`
    display: flex;
    width: 100%;
`;

export const ProductsContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`;

export const FormContainer = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 5px;

    input[type="text"] {
        width: 70%;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        border-radius: 0.25rem;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }

    input[type="text"]:focus {
        border-color: #80bdff;
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }

    button {
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        line-height: 1.5;
        color: #fff;
        background-color: #007bff;
        border: 1px solid #007bff;
        border-radius: 0.25rem;
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
    }

    button:hover {
        color: #fff;
        background-color: #0056b3;
        border-color: #0056b3;
        text-decoration: none;
    }
`;

export const ProductContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 50px;
    flex-wrap: wrap;
    padding-bottom: 50px;
`
