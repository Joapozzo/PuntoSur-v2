import { motion } from "framer-motion";
import styled from "styled-components";

export const CategoriesContainerStyled = styled(motion.div)`
    width: 25%;
    height: 100%;
    background-color: var(--blue);
    position: fixed;
    top: 60px;
    left: 0;
    overflow-y: auto;
    z-index: 5;
    @media screen and (max-width: 768px){
        width: 50%;
    }
`;
export const CategoriesWrapper = styled.div`
    width: 100%;
    padding: 30px;
    display: flex;
    gap: 30px;
    flex-direction: column;
    justify-content:start;
    align-items: start;
    h3 {
        font-size: 20px;
        font-weight: 700;
    }
`
export const CategoriesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
`
export const Categorie = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 768px){
        width: 90%;
    }

    &i,svg {
        color: var(--blue-light);
        font-size: 14px;
        cursor: pointer;
        &:hover{
            color: var(--white);
            transition: all .2s ease-in;
        }
    }

    a {
        color: white;

        &:hover{
            color: var(--blue-light);
            transition: all .2s ease-in;
        }
    }
`
export const CategoriesTitle = styled.div`
    display: flex;
    width: 100%;
    gap: 10px;
    align-items: center;
    border-bottom: 1px solid var(--blue-light);
    padding-bottom: 10px;
`
//Opener

export const OpenerContainerStyled = styled(motion.div)`
    width: 5%;
    height: 100%;
    background-color: var(--blue);
    position: absolute;
    position: fixed;
    @media screen and (max-width: 768px){
        width: 10%;
    }
`
export const OpenerWrapper = styled.div`
    width: 100%;
    padding: 30px 5px;
    display: flex;
    gap: 30px;
    flex-direction: column;
    h3 {
        font-size: 20px;
        font-weight: 700;
    }
`
export const OpenerTitle = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`