import styled from "styled-components";
import { dCircle, firstAlbumImage, secondAlbumImage, thirdAlbumImage } from "../../../assets/images";
import { Card } from "../../card/Card";

const ThirdSection = () => {
	return (
		<section className="c-m-sect-03">
			<div className="m-s03-text">
				<img
					src={ dCircle }
					alt="D circle"
					className="s03-image01"
				/>

				<h1 className="s03-t-slogan">Explore new musical horizons</h1>
				<p className="s03-t-subslogan">
					<u>Your playlist</u> has never been so <u>diverse.</u>
				</p>
			</div>


			<div className="m-s03-cards">
					<Card handleMouseClick={() => { }} id={1} artist={"Chief Keef"} image={ firstAlbumImage } price={2000} title={"Finally Rich"} />
					<Card handleMouseClick={() => { }} id={2} artist={"Marshmello Bastille"} image={ secondAlbumImage } price={4000} oldPrice={5500} title={"Happier"} />
					<Card handleMouseClick={() => { }} id={3} artist={"Alok"} image={ thirdAlbumImage } price={1000} title={"Deeper Ep"} />
			</div>

			<a className="s03-viewMore" href="/search">
				View More
			</a>
		</section>
	);
}

export { ThirdSection };
