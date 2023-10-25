import styled from "styled-components";

const ContainerGrid = styled.div`
    width: 100%;
    min-height: 25rem;
    height: 100%;
    
    display: grid;
    grid-gap: 2.5rem;
    grid-template-columns: repeat(auto-fit, minmax(21.875rem, 1fr));
    justify-content: center;
    justify-items: center;
`;

const NotFoundText = styled.p`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.625rem;
    font-weight: 900;
    color: var(--text-footer);
`;

export { ContainerGrid, NotFoundText};