import "./style.css";

import { HeaderLanding } from "../../components/header/lading/HeaderLanding";
import { FirstSection } from "../../components/section/first/FirstSection";
import { SecondSection } from "../../components/section/second/SecondSection";
import { ThirdSection } from "../../components/section/third/ThirdSection";
import { Footer } from "../../components/footer/Footer";

const Landing = () => {
  return (
    <>
      <div className="container">
				<HeaderLanding />

        <main className="c-main">
          <FirstSection/>
          <SecondSection />
          <ThirdSection />
        </main>
      </div>
      <Footer />
    </>
  );
}

export { Landing };
