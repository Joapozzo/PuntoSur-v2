import styled from "styled-components";

export const ProductContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    padding: 50px 0;
    width: 100%;
    max-width: 350px;
    gap: 20px;
    position: relative; /* Asegúrate de que el contenedor tenga posición relativa */

    &:hover {
        border: 1px solid var(--blue-light);
        transition: all .2s ease-in;
    }

    @media screen and (max-width: 768px){
        max-width: 130px;
        padding: 10px 0;
        gap: 15px;

        &:hover {
            border: none;
        }
    }
`;

export const SuccessMessage = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: green;
    color: white;
    text-align: center;
    padding: 10px;
    border-radius: 5px;
    font-size: 14px;
    z-index: 10;
`;

export const ProductImgContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ImgCustom = styled.img`
    width: 60%;
    height: 100%;
    object-fit: cover;
`;

export const ProductInfoContainer = styled.div`
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: 10px;

    h3 {
        font-weight: 700;
        font-size: 25px;
        color: var(--gray-300);

        @media screen and (max-width: 768px){
            font-size: 18px;
            width: 100%;
        }
    }
`;

export const ProductFoot = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    width: 100%;

    @media screen and (max-width: 768px){
        gap: 10px;
    }

    &i, svg {
        color: var(--blue);
    }

    a {
        color: white;
        background-color: var(--blue);
        padding: 10px 35px;
        border-radius: 15px;

        &:hover {
            background-color: transparent;
            color: var(--blue);
            border: 0.5px solid var(--blue);
            transition: all 0.3s ease;
        }

        @media screen and (max-width: 768px){
            font-size: 12px;
            padding: 8px 20px;
        }
    }
`;

export const ProductQuantity = styled.div`
    display: flex;
    gap: 15px;
    color: var(--gray-300);
    align-items: center;

    @media screen and (max-width: 768px){
        gap: 10px;
    }

    span {
        display: inline-block;
        width: 20px;
        text-align: center;
    }

    svg {
        cursor: pointer;
        font-size: 1.5em;
        &:hover {
            color: #000;
        }
    }
`;

export const ProductTotalContainer = styled.div`
    color: var(--gray-300);
    font-size: 18px;
    font-weight: 700;
    margin-top: 10px;

    @media screen and (max-width: 768px){
        font-size: 16px;
    }
`;

export const PriceOfferContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    p {
        color: var(--gray-300);
        font-size: 14px;
        text-decoration: line-through;

        @media screen and (max-width: 768px){
            font-size: 12px;
        }
    }

    span {
        color: var(--gray-300);
        font-size: 18px;
        font-weight: 700;

        @media screen and (max-width: 768px){
            font-size: 16px;
        }
    }
`;
