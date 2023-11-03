import styled from "styled-components";

const Container = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    z-index: 99;

    position: relative;
`;

const LogoSVG = styled.svg`
    max-width: 18.75rem;
    width: 100%;
    max-height: 9.188rem;
    height: 100%;

    position: relative;
    right: 14%;
                
    &:hover {
        transform: scale(1.06);
    }

    &:active {
        transform: scale(1);
    }
`;

export {
    Container,
    LogoSVG
}