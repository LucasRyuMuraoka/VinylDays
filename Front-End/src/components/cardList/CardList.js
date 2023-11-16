import React, { useEffect, useState } from "react";
import { Card } from "../card/Card";
import { ContainerGrid, NotFoundText } from "./styles";
import { CardService } from "../../service/card.service";
import { AlbumsService } from "../../service/albums.service";

const cardService = new CardService();

const CardList = ({ filter }) => {
		const albumsService = new AlbumsService();

    const [albums, setAlbums] = useState([]);
    let albumsWithFilter = cardService.handleInputFilter(filter, albums);

    const handleMouseClick = (album) => {
        console.log(album)
    }   

    useEffect(() => {
			albumsService.findAll().then(data => setAlbums(data));
		}, []);

    return (
        <ContainerGrid>
            {
                filter.length === 0 ?
                    albums.map(card => <Card key={card.id} handleMouseClick={handleMouseClick} id={card.id} category={card.category} title={card.title} artist={card.artist} price={card.price} oldPrice={card.oldPrice} image={card.URL}/>)
                :
                    albumsWithFilter.length === 0 ? <NotFoundText>No albums found...</NotFoundText> : albumsWithFilter.map(card => <Card key={card.id} handleMouseClick={handleMouseClick} id={card.id} category={card.category} title={card.title} artist={card.artist} price={card.price} oldPrice={card.oldPrice} image={card.URL}/>)
            }
        </ContainerGrid>
    );
}

export { CardList };
