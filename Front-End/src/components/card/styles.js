import styled from "styled-components";

const Container = styled.section`
    background-color: var(--shape);
    color: var(--text-color-dark);

    max-width: 18.75rem;
    height: 25rem;
        
    cursor: pointer;

    border: 0;
    border-radius: 1.875rem;
    box-shadow: rgba(255, 255, 255, 0.1) -0.25rem 0.625rem 0.938rem 0; //cor eixo-x eixo-y blur intensidade
    
    overflow: hidden;
    position: relative;

    &:hover {
        box-shadow: rgba(255, 255, 255, 0.2) -0.25rem 0.625rem 1.875rem 0; //cor eixo-x eixo-y blur intensidade                
        transform: scale(1.03);

        section {
            opacity: 100%;
        }
    }
`

const Image = styled.img`
    max-width: 18.75rem;
    height: 25rem;
`

const Infos = styled.section`
    background-color: var(--infos-background-plus-opacity);
    color: var(--text-color);
    
    position: absolute;
    bottom: 0;
    left: 0;
    
    padding: 1.563rem 1.25rem;

    width: 100%;
    height: 10.875rem;

    z-index: 99;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 1.25rem;

    opacity: 0%;

    @media only screen and (max-width: 980px) {
        opacity: 100%;
    }
`

const Album = styled.div`
    h2, p {
        font-weight: 900;

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    
    h2 {
        font-size: 1.5rem;
        max-width: 14ch;
    }
    
    p {
        font-size: 1rem;
        max-width: 20ch;
    }
`;

const Prices = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;

    gap: 0.625rem;

    p {
        font-weight: 900;

        &.price {
            font-size: 1.125rem;
        }

        &.old-price {
            font-size: 0.625rem;
            text-decoration: line-through;

            position: relative;
            top: 0.188rem;
        }
    }
`

const Heart = styled.div`
    cursor: pointer;

    position: absolute;
    bottom: 1.75rem;
    right: 1.875rem;

    width: 2.813rem;
    height: 2.813rem;

    border: 0;
    border-radius: 50%;

    background-color: var(--heart-background);

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        filter: brightness(0.7);                        
    }

    img {
        width: 0.938rem;
        height: 0.834rem;
    }
`

export {
    Container,
    Album,
    Heart,
    Image,
    Infos,
    Prices
}