import React, { useState } from "react";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer/Footer";
import { CardList } from "../../components/cardList/CardList";
import { useDinamicPageTitle } from "../../hooks/UseDinamicPageTitle";
import { CategoryList } from "../../components/categoryList/CategoryList";
import { Container, TitleContainer, Title, CircleTitle, CircleMinimal, CircleLarge, Main } from "./styles";

const Search = () => {
    
		const [searchInputValue, setSearchInputValue] = useState("");
    useDinamicPageTitle("Vinyl Days - Search Page");

    const handleSearchInput = (value) => {
        setSearchInputValue(value);
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
            </Container>
            <Footer/>
        </>
    );
}

export { Search };
