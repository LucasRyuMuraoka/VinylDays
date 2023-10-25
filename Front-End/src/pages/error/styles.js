import styled from "styled-components";

const Container = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 2%;

  h1 {
    &.thin {
      font-weight: 400;
    }

    position: relative;
    z-index: 1;

    white-space: nowrap;
    font-size: 40px;
  }
`;

const GoBackContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 10px;

  cursor: pointer;

  transition-duration: 500ms;

  &:hover {
    .icon {
      transform: translateX(5px);
    }
  }

  a {
    text-decoration: underline;
    offset-position: 0;
  }

  .icon {
    position: relative;
    top: 1px;
  }
`;

export { Container, GoBackContainer };