import styled from "styled-components";

const Container = styled.section`
  padding: 1% 2% 1% 2%;
  margin: 0 auto;
  
  width: 90vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  gap: 19%;

  @media only screen and (max-width: 1280px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Left = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.125rem;

  position: relative;
  top: -2%;

  @media only screen and (max-width: 500px) {
    top: 0;
  }
`;

const Logo = styled.img`
  position: relative;
  right: 26%;

  @media only screen and (max-width: 1024px) {
    right: 3%;
  }

  @media only screen and (max-width: 420px) {
    width: 15.625rem;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  position: relative;
  right: 2.5%;

  gap: 1.25rem;

  @media only screen and (max-width: 1024px) {
    left: 0;
  }

  @media only screen and (max-width: 420px) {
    left: -0.75rem;
  }
`;

const Title = styled.h1`
  color: var(--text-body);
  font-size: 70px;
  font-weight: 900;

  @media only screen and (max-width: 420px) {
    font-size: 40px;
  }
`;

const SubTitle = styled.p`
  color: var(--text-body);
  font-size: 1.25rem;
  font-weight: 600;
  position: relative;
  top: 1rem;
  z-index: 2;
  
  white-space: nowrap;

  @media only screen and (max-width: 420px) {
    top: 0.5rem;
  }
`;

const FirstElipse = styled.img`
  max-width: 100%;
  position: absolute;
  right: -5%;
  top: 28%;

  @media only screen and (max-width: 420px) {
    width: 60px;
    height: 60px;
    top: 2%;
    right: -5%;
  }
`;

const SecondElipse = styled.img`
  position: absolute;
  right: -6%;
  top: 18%;

  @media only screen and (max-width: 420px) {
    width: 25px;
    height: 25px;
    right: -6%;
    top: -10%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 50px;

  @media only screen and (max-width: 420px) {
    gap: 40px;
  }
`;

const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    color: white;
    font-size: 28px;
    font-weight: 600;
    position: relative;
    left: 25px;
  }

  @media only screen and (max-width: 420px){
    gap: 2px;

    label {
      font-size: 20px;
      position: relative;
      left: 25px;
    }
  }
`;

const Input = styled.input`
  background-color: var(--text-body);
  border-radius: 1.875rem;
  color: var(--text-footer);
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 0.088rem;
  width: 30rem;
  height: 5.5rem;
  padding-left: 25px;
  padding-right: 25px;

  &:hover {
    filter: brightness(90%);
  }

  &:focus {
    outline: 0;
  }

  @media only screen and (max-width: 420px) {
    font-size: 20px;
    width: 26rem;
    height: 5rem;
    padding: 0 50px 0 25px;
  }
`;

const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    color: var(--text-body);
    font-size: 28px;
    font-weight: 600;
    position: relative;
    left: 25px;
  }

  @media only screen and (max-width: 420px) {
    gap: 2px;

    label {
      font-size: 20px;
      position: relative;
      left: 25px;
    }
  }
`;

const BtnSubmit = styled.button`
  background-color: var(--button-background);
  border-radius: 100px;
  border: 0px;
  color: white;
  font-size: 32px;
  font-weight: 800;
  letter-spacing: 1.8px;
  width: 30rem;
  height: 5.5rem;

  &:hover {
    filter: brightness(90%);
  }

  @media only screen and (max-width: 420px) {
    font-size: 20px;
    width: 26rem;
    height: 5rem;
  }
`;

const Right = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;

  @media only screen and (max-width: 1280px) {
    display: none;
  }
`;

const RightImage = styled.img`
  position: relative;
  left: 47%;
`;

export { Container, Left, Logo, TitleContainer, Title, SubTitle, FirstElipse, SecondElipse, Form, EmailContainer, Input, PasswordContainer, BtnSubmit, Right, RightImage };