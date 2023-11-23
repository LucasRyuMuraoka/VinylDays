import { logoSvg } from "../../../assets/images";

const HeaderLanding = () => {
	return (
		<header className="c-header">
			<img
				src={logoSvg}
				alt="Vinyl Days Logo"
				className="c-h-logo"
			/>

			<a className="c-h-button" href="/login">Sign In</a>
		</header>
	);
}

export { HeaderLanding };
