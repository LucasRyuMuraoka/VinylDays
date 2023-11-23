import styled from "styled-components";

const Container = styled.section`
  padding: 3% 2% 3% 2%;
  width: 90%;
  min-height: 100vh;
  height: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 7.5rem; /* 120px */

  @media only screen and (max-width: 720px) {
    padding: 8% 4% 8% 4%;
    width: 100%;
  }
`;

const Title = styled.h1`
  font-weight: 900;
  font-size: 2.25rem;

  position: relative;
  z-index: 1;

	&.logout {
		text-align: center;
	}

  @media only screen and (max-width: 426px) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 272px) {
    &.min {
      font-size: 1.2rem;
    }
  }
`;

const Subtitle = styled.h3`
  font-weight: 500;
  font-size: 1.25rem;

  position: relative;
  bottom: 0.313rem;

  z-index: 1;

  @media only screen and (max-width: 426px) {
    font-size: 1rem;
    bottom: 0.150rem;
  }

  @media only screen and (max-width: 310px) {
    font-size: 0.85rem;

    &.min {
      font-size: 0.75rem;
    }
  }
`;

const Elipse = styled.div`
  position: absolute;
  top: -90%;
  right: -1.563rem;

  width: 4.375rem;
  height: 4.375rem;

  z-index: 0;

  border-radius: 50%;

  background-color: var(--elipse-light-purple);
  box-shadow: rgba(111, 108, 242, 0.70) 0 0 1.875rem 0.625rem;

  @media only screen and (max-width: 426px) {
    top: -100%;
    right: -1.875rem;
  }

  @media only screen and (max-width: 310px) {
    width: 3.125rem;
    height: 3.125rem;
    top: -90%;
    right: -1.25rem;
  }
`;

const SubtitleContainer = styled.div`
  position: relative;
`;

const TitleContainer = styled.section`
  display: flex;
  justify-content: start;
  align-items: end;
  gap: 1.25rem;

  position: relative;

  max-width: 29.375rem;
  width: 100%;
  height: 2.813rem;

  @media only screen and (max-width: 426px) {
    gap: 0.625rem;
  }
`;

const Logo = styled.img`
  width: 9.375rem;
  height: 4.601rem; 

  cursor: pointer;

  &:hover {
    transform: scale(1.06);
    filter: brightness(50%);
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const RightContainer = styled.section`
  display: flex;
  gap: 1.25rem;
  width: 31.25rem;

  @media only screen and (max-width: 824px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const BtnNewAlbum = styled.button`
  border: 0;

  color: var(--text-body);
  background-color: var(--button-add-background);
  box-shadow: 0 0 0.625rem 0.25rem rgba(255, 255, 255, 0.3); 
  
  font-weight: 900;
  font-size: 1.125rem;

  max-width: 8.125rem;
  width: 100%;

  border-radius: 1.875rem;

  &:hover {
    filter: brightness(80%);
  }

  @media only screen and (max-width: 426px) {
    max-width: 6.25rem;
    font-size: 1rem;
  };
`;

const MainHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 824px) {
    flex-direction: column;
    align-items: start;
    gap: 1.25rem;
  }
`;

const Logout = styled.button`
	max-width: 450px;
	width: 100%;
	height: 55px;

	background-color: transparent;
	border: 2px solid red;
	border-radius: 10px;
	color: red;

	font-size: 20px;
	font-weight: 800;

	&:hover, &:active {
		background-color: red;
		color: white;
	}
`;

const LogoutContainer = styled.section`
	display: flex;
	flex-direction: column;
	gap: 20px;

	justify-content: center;
	align-items: center;

	margin-top: 65px;
`;

export {
  Container,
  BtnNewAlbum,
  Elipse,
  Header,
  Logo,
  Main,
  MainHeader,
  RightContainer,
  Subtitle,
  SubtitleContainer,
  Title,
  TitleContainer,
	Logout,
	LogoutContainer
};
