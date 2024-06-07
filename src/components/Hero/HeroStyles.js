import { NavLink } from "react-router-dom";
import styled from "styled-components"

export const HeroContainerStyled = styled.div`
    width: 100%;
`
export const HeroWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 500px;

`
export const StyledBackground = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
`;

export const HeroInfoContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 30px;
    padding: 100px 500px 100px 100px;
    color: white;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.7);

    h1 {
        font-size: 60px;
    }

    h1 > span {
        color: var(--blue-light);
    }

    p {
        font-size: 20px;
    }

    @media screen and (max-width: 768px){
        padding: 50px;
    }
`

export const ButtonProducts = styled(NavLink)`
    color: white;
    background-color: var(--blue);
    padding: 10px 15px;
    border-radius: 15px;

    &:hover {
        background-color: transparent;
        color: var(--white);
        border: 0.5px solid var(--white);
        transition: all 0.3s ease;
    }
`