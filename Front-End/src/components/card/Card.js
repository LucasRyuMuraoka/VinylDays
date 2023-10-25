import React, { useState } from "react";
import { heartIconFavSVG, heartIconUNFavSVG } from "../../assets/images";

import { Container, Image, Infos, Album, Prices, Heart } from "./styles";

const Card = ({ id, title, artist, price, oldPrice, image, handleMouseClick }) => {
    
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
    }

    const handleClick = () => {
        handleMouseClick(id);
    }

    return(
        <Container onClick={ handleClick }>
            <Image src={ image } alt="Album cape jpg"></Image>

            <Infos>
                <Album>
                    <h2>{ title }</h2>
                    <p>{ artist }</p>
                </Album>
                
                <Prices>
                    <p className="price">R$ { price }</p>
                    {
                        price !== oldPrice && <p className="old-price">R$ {oldPrice}</p>
                    }
                </Prices>

                <Heart onClick={ handleFavoriteClick }>
                    {
                        isFavorite ? <img src={ heartIconFavSVG } alt="Heart icon svg" /> : <img src={ heartIconUNFavSVG } alt="Heart icon svg" />
                    }
                </Heart>
            </Infos>

            
        </Container>
    );
}

export { Card };