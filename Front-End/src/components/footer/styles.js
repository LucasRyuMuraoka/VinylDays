import styled from "styled-components";

const Footer = styled.footer`
  background-color: var(--footer-background);
          
  width: 100vw;
  height: auto;
          
  position: relative;
  z-index: 98;

  margin-top: 6.25rem;

  padding: 2% 4% 2% 4%;

  @media only screen and (max-width: 720px) {
    padding: 0;
    height: auto;
  }
`;

const Container = styled.section`
  width: 90vw;
  height: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  section {
    width: 100%;
  }

  @media only screen and (max-width: 720px) {
    padding: 4% 8% 4% 8%;
    width: 100vw;

    justify-content: start;
    align-items: start;
    gap: 2.5rem;
  }
`;

const Top = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  a {
    svg {
      width: 12.5rem;
      height: auto;
      position: relative;
      right: 15%;

      &:hover {
          transform: scale(1.06);
      }

      &:active {
          transform: scale(1);
      }
    }
  }

  @media only screen and (max-width: 720px) {
    flex-direction: column;
    justify-content: start;
    align-items: start;

    gap: 0.625rem;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
                    
        svg {
            right: 0;
        }
    }
  }
`;

export const SocialNetworking = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 0.625rem;

  svg {
      cursor: pointer;

      &:hover {
          transform: scale(1.1);
      }
  }
`;

const Center = styled.section`
  nav {
    ul {
        font-size: 1.375rem;
        font-weight: 600;

        display: flex;
        flex-direction: column;
        gap: 1.125rem;
    }
  }
`;

const Bottom = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.313rem;

  font-size: 1.125rem;
  font-weight: 600;

  &, a {
      color: var(--text-footer);
      font-style: italic;
  }

  a {
      text-decoration: underline;
      cursor: pointer;
  }

  @media only screen and (max-width: 720px) {
    font-size: 1rem;
    text-align: center;
  }
`;

export { Footer, Container, Top, Center, Bottom };