import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HomeContainerStyled = styled.main`
    width: 100%;
    padding: 60px 0 0 0;
`
export const HomeWrapper = styled.div`
    flex-direction: column;
    gap: 40px;
`
export const CardProductContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;

    @media screen and (max-width: 768px){
        
    }
`
export const ViewMoreButton = styled(NavLink)`
    background-color: transparent;
    color: var(--blue);
    border: 0.5px solid var(--blue);

    padding: 10px 35px;
    border-radius: 15px;

    &:hover {
        color: white;
        background-color: var(--blue);
        transition: all 0.3s ease;
    }
`