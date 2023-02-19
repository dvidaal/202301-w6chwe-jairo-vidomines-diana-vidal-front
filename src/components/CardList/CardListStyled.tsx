import styled from "styled-components";

const CardListStyled = styled.ul`
  display: grid;
  gap: 40px;
  align-items: center;
  justify-content: center;
  padding: 40px;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 20px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 10px;
  }

  .card {
    display: flex;
    justify-content: center;
    width: 300px;
    display: flex;
    align-items: center;
  }
`;

export default CardListStyled;
