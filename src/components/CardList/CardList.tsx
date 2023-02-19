import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import { useAppSelector } from "../../store/hooks";
import Card from "../Card/Card";
import CardListStyled from "./CardListStyled";

const CardList = (): JSX.Element => {
  const { getRobots } = useApi();

  useEffect(() => {
    getRobots();
  }, [getRobots]);

  const robotsList = useAppSelector((robots) => robots.robots);

  return (
    <CardListStyled>
      {robotsList.map((robot) => (
        <li key={robot._id}>
          <Card robot={robot} />
        </li>
      ))}
    </CardListStyled>
  );
};

export default CardList;
