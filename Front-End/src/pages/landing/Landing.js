import "./styles.css";
import { logoSvg, dCircle, vinyl, smartphoneSVG, firstAlbumImage, secondAlbumImage, thirdAlbumImage } from "../../assets/images";
import { Footer } from "../../components/footer/Footer";

const Landing = () => {
  return (
    <>
      <div className="container">
        <header className="c-header">
          <div className="menu-icon">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

          <img
            src={logoSvg}
            alt="Vinyl Days Logo"
            className="c-h-logo"
          />

          <nav className="c-h-nav">
            <ul className="c-n-ul">
              <li><a href="/">Home</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Contact</a></li>
              <li><a href="/">Resources</a></li>
            </ul>
          </nav>

          <a className="c-h-button" href="/login">Sign In</a>
        </header>

        <main className="c-main">
          <section className="c-m-sect-01">
            <div className="m-s01-text">
              <img
                src={dCircle}
                alt="D circle"
                className="s01-image01"
              />
              <h1 className="s01-t-slogan">Discover the beat of your soul</h1>

              <p className="s01-t-subslogan">
                Exploring vinyl to feed your musical soul,
                <u>find the soundtrack to your life.</u>
              </p>
            </div>

            <img
              src={vinyl}
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

          <section class="c-m-sect-02">
            <img
              src={ smartphoneSVG }
              alt="SmartPhone"
              class="s02-image01"
            />

            <div class="m-s02-text">
              <img
                src={ dCircle }
                alt="D circle"
                class="s02-image02"
              />

              <pre class="s02-t-slogan" style={{ fontFamily: "Inter" }}>
                Explore the past, feel
                the present, create a more
                musical future.
              </pre>

              <pre class="s02-t-subslogan" style={{ fontFamily: "Inter" }}>
                Browse the notes,
                <u>uncover your emotions.</u>
              </pre>
            </div>
          </section>

          <section class="c-m-sect-03">
            <div class="m-s03-text">
              <img
                src={ dCircle }
                alt="D circle"
                class="s03-image01"
              />

              <h1 class="s03-t-slogan">Explore new musical horizons</h1>
              <p class="s03-t-subslogan">
                <u>Your playlist</u> has never been so <u>diverse.</u>
              </p>
            </div>

            <div class="m-s03-cards">
              <img
                src={ firstAlbumImage }
                alt="Album Image01"
                class="s03-image02"
              />
              <img
                src={ secondAlbumImage }
                alt="Album Image02"
                class="s03-image03"
              />
              <img
                src={ thirdAlbumImage }
                alt="Album Image03"
                class="s03-image04"
              />
            </div>

            <p class="s03-viewMore">
              <u>View More</u>
            </p>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}

export { Landing };