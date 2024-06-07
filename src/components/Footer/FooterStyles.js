import styled from "styled-components";

export const FooterContainerStyled = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: var(--blue);
    align-items: center;
    justify-content: center;
    gap: 20px;
    position: relative;
    z-index: 5;
`
export const FooterWrapper = styled.section`
    padding: 30px 60px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media screen and (max-width: 768px){
        flex-direction: column;
        gap: 60px;
    }
`
export const NavFootContainer = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: start;

    a {
        color: white;
    }

`
export const ContactoContainer = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: start;
    h2 {
        font-size: 25px;
        font-weight: 600;
    }
`
export const ItemContacto = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`
export const FooterBottom = styled.div`
    padding: 20px 0;
    border-top: 1px solid var(--blue-light);
    width: 100%;
    text-align: center;
    p {
        color: var(--blue-light);
    }
`