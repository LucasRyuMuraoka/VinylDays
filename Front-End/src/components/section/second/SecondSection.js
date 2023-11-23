import { dCircle, smartphoneSVG } from "../../../assets/images";

const SecondSection = () => {
	return (
		<section className="c-m-sect-02">
            <img
              src={ smartphoneSVG }
              alt="SmartPhone"
              className="s02-image01"
            />

            <div className="m-s02-text">
							<h1 className="s02-t-slogan">
								<img
									src={ dCircle }
									alt="D circle"
									className="s02-image02"
              	/>Explore the past, feel
							</h1>
							<h1 className="s02-t-slogan w-circle">the present, create a more</h1>
							<h1 className="s02-t-slogan">musical future.</h1>

              <p className="s02-t-subslogan" style={{ fontFamily: "Inter" }}>
                Browse the notes,
								<br/>
                <u>uncover your emotions.</u>
              </p>
            </div>
          </section>
	);
}

export { SecondSection };
