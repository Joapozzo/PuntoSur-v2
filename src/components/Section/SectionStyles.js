import styled from "styled-components";

export const SectionWrapper = styled.section`
    padding: 50px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 60px;
    justify-content: center;
    align-items: center;

    h2 {
    color: var(--blue); 
    position: relative;
    font-size: 35px;
    line-height: 16px;
    font-weight: 600;
            &::after {
            content: '';
            position: absolute;
            bottom: -15px;
            left: 50%;
            transform: translateX(-50%);
            width: 75%;
            height: 2px;
            border-radius: 10px;
            background-color: var(--blue);
        }

        @media screen and (max-width: 768px) {
            line-height: 30px;
            text-align: center;
            font-size: 25px;
    }
    }
`