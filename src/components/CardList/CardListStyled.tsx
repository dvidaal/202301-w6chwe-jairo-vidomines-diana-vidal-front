import styled from "styled-components";

const CardListStyled = styled.ul`
  display: grid;
  gap: 40px;
  align-items: center;
  justify-content: center;
  padding: 40px;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));

  .card {
    display: flex;
    justify-content: center;
    width: 300px;
    display: flex;
    align-items: center;
  }

  img {
    border-radius: 10px;
  }
`;

export default CardListStyled;
