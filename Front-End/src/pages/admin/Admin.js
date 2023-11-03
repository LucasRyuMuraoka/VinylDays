import React from "react";
import { Footer } from "../../components/footer/Footer";
import { Table } from "../../components/table";
import { BtnNewAlbum, Container, Elipse, Header, Logo, Main, MainHeader, RightContainer, Subtitle, SubtitleContainer, Title, TitleContainer } from "./styles";
import { useDinamicPageTitle } from "../../hooks/UseDinamicPageTitle";
import { logoSvg } from "../../assets/images";
import { Input } from "../../components/input/Input";
import { useState } from "react";
import { Link } from "react-router-dom";

const Admin = () => {

  const [input, setInput] = useState("");

  useDinamicPageTitle("Vinyl Days - Admin Panel")

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  return(
    <>
      <Container>
        <Header>
          <TitleContainer>
            <Title className="min">Admin Panel</Title>
            
            <SubtitleContainer>
              <Subtitle className="min">Vinyl Days Plataform.</Subtitle>
              <Elipse />
            </SubtitleContainer>
          </TitleContainer>

          <Link to="/">
            <Logo src={ logoSvg } alt="Purple vinyl days logo" />
          </Link>
        </Header>

        <Main>
          <MainHeader>
            <TitleContainer>
              <Title>Item List</Title>
              <Subtitle>All albums on the system.</Subtitle>
            </TitleContainer>

            <RightContainer>
              <Input type="text" placeholder="Search albums here..." handleInputChange={ handleInputChange }/>
              <BtnNewAlbum>Add</BtnNewAlbum>
            </RightContainer>
          </MainHeader>

          <Table filter={ input }/>
        </Main> 
      </Container>

      <Footer />
    </>
  );
}

export { Admin };