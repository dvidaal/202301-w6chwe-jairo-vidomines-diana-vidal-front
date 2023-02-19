interface RobotStructure {
  id: string;
  image: string;
  name: string;
  stats: {
    speed: string;
    endurance: string;
    creationDate: string;
  };
}

export type RobotsStructure = RobotStructure[];

export default RobotStructure;
