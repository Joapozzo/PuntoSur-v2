import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const NavbarContainerStyled = styled.nav`
    width: 100%;
    height: 60px;
    background-color: var(--blue);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    display: flex;
    justify-content: center;
    flex-direction: column;
`
export const Logo = styled(NavLink)`
    cursor: pointer;
    font-size: 20px;
    color: white;
`

export const NavbarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    width: 100%;
    height: 100%;
    max-width: 1500px;

    .menuBars {
        @media screen and (max-width: 768px){
        display: flex;
    }
    display: none
    }
`
export const NavbarListContainer = styled.div`

    @media screen and (max-width: 768px){
        display: none;
    }

    display: flex;
    gap: 20px;
`
export const NavbarItem = styled(NavLink)`
    color: var(--white);
    position: relative;
    text-decoration: none;

    &:after {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: var(--white);
        transition: width 0.3s ease;
    }

    &:hover::after {
        width: 70%;
    }
`
export const NavbarCartContainer = styled(NavLink)`
    background-color: var(--white);
    display: flex;
    align-items: center;
    gap: 5px;
    border-radius: 10px;
    padding: 10px 20px;
    color: var(--blue);

    p {
        font-weight: 600;
    }

    &:hover{
        background-color: transparent;
        color: var(--white);
        border: 0.5px solid var(--white);
        transition: all 0.3s ease;
    }
`
//menuResponsive
export const NavbarListResponsiveContainer = styled(motion.div)`
    position: fixed;
    top: 60px;
    bottom: 0;
    left: 0;
    width: 50%;
    z-index: 99;
    background-color: var(--blue);
`

export const NavbarListResponsive = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 20px;
`