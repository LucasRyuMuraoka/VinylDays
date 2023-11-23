import React, { useState } from "react";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer/Footer";
import { CardList } from "../../components/cardList/CardList";
import { useDinamicPageTitle } from "../../hooks/UseDinamicPageTitle";
import { CategoryList } from "../../components/categoryList/CategoryList";
import { Container, TitleContainer, Title, CircleTitle, CircleMinimal, CircleLarge, Main } from "./styles";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LoginContainer = styled.section`
	display: flex;
	flex-direction: column;
	gap: 20px;

	justify-content: center;
	align-items: center;

	margin-top: 80px;
`;

const TitleLogin = styled.h1`
  font-weight: 900;
  font-size: 2.25rem;

  position: relative;
  z-index: 1;

	text-align: center;

  @media only screen and (max-width: 426px) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 272px) {
    &.min {
      font-size: 1.2rem;
    }
  }
`;


const LoginBtn = styled.button`
	max-width: 450px;
	width: 100%;
	height: 55px;

	background-color: transparent;
	border: 2px solid var(--elipse-blue);
	border-radius: 10px;
	color: var(--elipse-blue);

	font-size: 20px;
	font-weight: 800;

	&:hover, &:active {
		background-color: var(--elipse-blue);
		color: white;
	}
`;

const Search = () => {
	
		const navigate = useNavigate();
		const [searchInputValue, setSearchInputValue] = useState("");
    useDinamicPageTitle("Vinyl Days - Search Page");

    const handleSearchInput = (value) => {
        setSearchInputValue(value);
    }

		const handleRedirect = () => {
			navigate("/admin");
		}

    return (
        <>
            <Container>
                <Header onChange={ handleSearchInput }/>
                <Main>
                    <TitleContainer>
                            <Title>Explore our collection</Title>
                            <CircleTitle />
                            <CircleMinimal />
                            <CircleLarge />
                    </TitleContainer>
                    <CategoryList />
                    <CardList filter={ searchInputValue }/>
                </Main>
								<LoginContainer>
									<TitleLogin>You already have an account?</TitleLogin>
									<LoginBtn onClick={ handleRedirect }>Login</LoginBtn>
								</LoginContainer>
            </Container>
            <Footer/>
        </>
    );
}

export { Search };
