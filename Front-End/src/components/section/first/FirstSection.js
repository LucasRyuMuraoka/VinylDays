import { dCircle, vinyl } from "../../../assets/images";

const FirstSection = () => {
	return (
		<section className="c-m-sect-01">
			<div className="m-s01-text">
				<img
					src={ dCircle }
					alt="D circle"
					className="s01-image01"
				/>
				<h1 className="s01-t-slogan">Discover the beat of your soul</h1>

				<p className="s01-t-subslogan">
					Exploring vinyl to feed your musical soul,
					&nbsp;<u>find the soundtrack to your life.</u>
				</p>
			</div>

			<img
				src={ vinyl }
				alt="Vinyl"
				className="s01-image02"
			/>

			<div className="m-s01-input">
				<label className="s01-i-label">Do you want to receive updates?</label>

				<div className="m-s01-i-button">
					<input
						type="email"
						placeholder="Enter your e-mail"
						className="s01-i-input"
					/>
					<button className="s01-i-button">Register</button>
				</div>
			</div>
		</section>
	);
}

export { FirstSection };
