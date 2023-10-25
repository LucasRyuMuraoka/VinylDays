import styled from "styled-components";

const Container = styled.section`
  padding: 1% 2% 1% 2%;
  width: 90%;
  height: auto;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media only screen and (max-width: 720px) {
    padding: 8% 4% 8% 4%;
    width: 100%;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;
`;

const TitleContainer = styled.div`
    margin: 0 auto;
    text-align: start;

    position: relative;

    div {
        position: absolute;
        border-radius: 50%;
    }
`;

const Title = styled.h1`
    font-weight: 900;
    font-size: 30px;
    white-space: nowrap;

    position: relative;
    left: 3%;
    z-index: 2;
    
    word-spacing: 0.313rem;

    @media only screen and (max-width: 720px) {
      left: 3%; 
    }

    @media only screen and (max-width: 540px) {
      font-size: 26px;
      top: 2%;
    }

    @media only screen and (max-width: 420px) {
      font-size: 24px;
      left: 4%;
    }
`;

const CircleTitle = styled.div`
    width: 0.625rem;
    height: 0.625rem;
    
    z-index: 2;
    
    background-color: #ffffff;
    border-radius: 50%;
    
    top: 0.25rem;
    left: 0.5rem;
`;

const CircleMinimal = styled.div`
    background-color: #5246DE;
    
    width: 1.875rem;
    height: 1.875rem;

    z-index: 1;    
    top: -1.25rem;
    left: -1.125rem;
    
    opacity: 10%;
`;

const CircleLarge = styled.div`
    background-color: #5246DE;

    width: 3.75rem;
    height: 3.75rem;

    z-index: 0;
    top: -0.75rem;
    left: -0.625rem;

    opacity: 20%;
`;

export {
  Container,
  TitleContainer,
  Title,
  CircleTitle,
  CircleMinimal,
  CircleLarge
};