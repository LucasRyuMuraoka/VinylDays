import styled from "styled-components";

export const Container = styled.section`
  background-color: var(--category-background);
  white-space: nowrap;

  padding: 0.938rem 1.125rem;
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-weight: 700;

  border-radius: 1.2rem;

  box-shadow: rgba(255, 255, 255, 0.3) 0 0 0.625rem 0;

  cursor: pointer;

  &:hover {
    box-shadow: rgba(255, 255, 255, 0.4) 0 0 0.625rem 0;
    border-radius: 1.875rem;
    filter: brightness(0.8);
  }
`;

export const ContainerClicked = styled.section`
  background-color: var(--selected-category-background);
  white-space: nowrap;

  padding: 0.938rem 1.125rem;
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-weight: 700;

  border-radius: 1.2rem;

  cursor: pointer;

  &:hover {
    border-radius: 1.875rem;
    filter: brightness(0.8);
  }
`;