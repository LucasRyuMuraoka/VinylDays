import { useDinamicPageTitle } from "../../hooks/UseDinamicPageTitle";
import { Container, GoBackContainer } from "./styles";

const Error = () => {
  
  useDinamicPageTitle("Vinyl Days - Error");

  return (
    <Container>
      <h1 className="thin">404</h1>
      <h1>Page Not Found</h1>
      <GoBackContainer>
        <a href="/search">Return to search page</a>
        <i class="fa-solid fa-angle-right icon"></i>
      </GoBackContainer>
    </Container>
  );
}

export { Error };