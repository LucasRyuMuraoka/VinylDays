import React, { useEffect, useState } from "react";
import { Card } from "../card/Card";
import { ContainerGrid, NotFoundText } from "./styles";
import { axiosAPI } from "../../service/axios.api";
import { CardService } from "../../service/card.service";

const cardService = new CardService();

const CardList = ({ filter }) => {
    const [albums, setAlbums] = useState([]);
    let albumsWithFilter = cardService.handleInputFilter(filter, albums);

    const handleMouseClick = (album) => {
        console.log(album)
    }   

    useEffect(() => {
        axiosAPI.get("/albums")
        .then((data) => setAlbums(data.data))
        .catch((error) => console.log(`Erro: ${ error }`));
    }, []);

    return (
        <ContainerGrid>
            {
                filter.length === 0 ?
                    albums.map(card => <Card key={card.id} handleMouseClick={handleMouseClick} id={card.id} category={card.category} title={card.title} artist={card.artist} price={card.price} oldPrice={card.oldPrice} image={card.image}/>)
                :
                    albumsWithFilter.length === 0 ? <NotFoundText>No albums found...</NotFoundText> : albumsWithFilter.map(card => <Card key={card.id} handleMouseClick={handleMouseClick} id={card.id} category={card.category} title={card.title} artist={card.artist} price={card.price} oldPrice={card.oldPrice} image={card.image}/>)
            }
        </ContainerGrid>
    );
}

export { CardList };