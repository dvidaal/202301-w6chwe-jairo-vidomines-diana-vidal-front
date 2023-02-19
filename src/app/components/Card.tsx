import { RobotStructure } from "../../types";
import CardStyled from "./CardStyled";

export interface RobotProps {
  robot: RobotStructure;
}

const Card = ({ robot }: RobotProps): JSX.Element => {
  return (
    <>
      <CardStyled>
        <div className="cardContainer">
          <img
            src={robot.image}
            alt="R2-D2 foto frontal"
            width="200"
            height="300"
          />
          <h2 className="name">{robot.name}</h2>
          <span>Speed: {robot.stats.speed}</span>
          <span>Endurance: {robot.stats.endurance}</span>
          <span>Date: {robot.stats.creationDate}</span>
        </div>
      </CardStyled>
    </>
  );
};

export default Card;
