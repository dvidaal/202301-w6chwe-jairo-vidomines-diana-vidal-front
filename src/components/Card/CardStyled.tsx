import styled from "styled-components";

const CardStyled = styled.article`
  width: 230px;
  height: 460px;
  border: 2px solid black;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;

  span {
    color: black;
  }

  img {
    object-fit: cover;
  }

  .cardContainer {
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 10px;
  }

  .name {
    font-weight: bold;
  }
`;

export default CardStyled;
