import { RobotStructure } from "../../types";
import CardStyled from "./CardStyled";

export interface RobotProps {
  robot: RobotStructure;
}

const Card = ({
  robot: {
    image,
    name,
    stats: { speed, endurance, creationDate },
  },
}: RobotProps): JSX.Element => {
  return (
    <>
      <CardStyled className="card-content">
        <div className="card-data">
          <img
            className="card-data_image"
            src={image}
            alt="R2-D2 foto frontal"
            width="200"
            height="300"
          />
          <h2 className="card-data_name">{name}</h2>
          <span className="card-container_speed">Speed: {speed}</span>
          <span className="card-container_endurance">
            Endurance: {endurance}
          </span>
          <span className="card-container_date">Date: {creationDate}</span>
        </div>
      </CardStyled>
    </>
  );
};

export default Card;
