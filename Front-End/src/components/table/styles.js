import styled from "styled-components";

const Container = styled.section`
  scrollbar-width: 0;

  -ms-overflow-style: none;  /* hidden scrollbar on IE and Edge */
  scrollbar-width: none;  /* hidden scrollbar on Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
  overflow: auto;
`;

const Th = styled.th`
  font-weight: 800;
  white-space: nowrap;
`;

const BtnAction = styled.svg`
  cursor: pointer;
  
  &:hover {
    transform: scale(1.06);
    filter: brightness(80%);
  }

  @media only screen and (max-width: 826px) {
    width: 3rem;
    height: 3rem;
  }
`;


const Image = styled.img`
  width: 7.5rem;
  height: auto;
  border-radius: 0.938rem;
`;

const TableData = styled.p`
  white-space: nowrap;
  max-width: 14ch;

  overflow: hidden;
  text-overflow: ellipsis;

  text-align: center;
  margin: auto;

  &.category {
    max-width: 7.5ch;
  }
`;

const AlignCenter = styled.div`
  display: flex;
  height: 150px;
`;

const TableDataNotFound = styled.td`
  height: 100px;
  color: var(--text-footer);
  font-weight: 900;
`;

export { Container, Th, BtnAction, AlignCenter, Image, TableData, TableDataNotFound };