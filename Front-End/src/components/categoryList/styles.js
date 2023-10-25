import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  
  max-width: 80%;
  width: 100%;
  height: auto;

  gap: 1.25rem;

  overflow: auto;

  scrollbar-width: 0;

  -ms-overflow-style: none;  /* hidden scrollbar on IE and Edge */
  scrollbar-width: none;  /* hidden scrollbar on Firefox */

  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 610px) {
    justify-content: start;
  }
`;