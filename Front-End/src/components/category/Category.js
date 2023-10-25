import React from "react";
import { Container } from "./styles";

const Category = ({ title }) => {
  return(
    <Container>
      { title }
    </Container>
  );
}

export { Category };