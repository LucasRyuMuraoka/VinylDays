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

const ContainerInput = styled.section`
    position: relative;
    z-index: 99;

    max-width: 25rem;
    width: 100%;
    height: 2.5rem;
    border: 0.125rem solid rgba(255, 255, 255);
    border-radius: 1.875rem;

    box-shadow: rgba(255, 255, 255, 0.3) 0 0.125rem 1.25rem 0; //cor eixo-x eixo-y blur intensidade

    &:focus-within {
        box-shadow: rgba(255, 255, 255, 0.5) 0 0.125rem 1.25rem 0;
    }

    &:hover {
        filter: brightness(0.9);
    }

    @media only screen and (max-width: 980px) {
        max-width: 18.75rem;
    }

    @media only screen and (max-width: 720px) {
        max-width: 15.625rem;
    }

    @media only screen and (max-width: 420px) {
        max-width: 12.5rem;
    }
`;

const Input = styled.input`
    width: 100%;
    height: 100%;
    border: 0;

    background-color: transparent;
    color: var(--text-color);

    padding: 0 3.5rem 0 1.2rem;

    font-size: 1.125rem;
    font-weight: 600;

    &:focus {
        outline: 0;
    }

    @media only screen and (max-width: 980px) {
        padding-right: 3rem;
    }

    @media only screen and (max-width: 420px) {
        font-size: 1.063rem;
    }
`;

const SearchSVG = styled.svg`
    position: absolute;
    top: 20%;
    right: 5.5%;
    width: 1.25rem;
    height: 1.25rem;

    @media only screen and (max-width: 980px) {
        top: 18%;
    }

    @media only screen and (max-width: 720px) {
        top: 20%;
    }

    @media only screen and (max-width: 420px) {
        right: 7%;
    }
`;

export {
    Container,
    LogoSVG,
    ContainerInput,
    Input,
    SearchSVG
}