export interface RobotStructure {
  _id: string;
  name: string;
  image: string;
  stats: {
    speed: string;
    endurance: string;
    creationDate: string;
  };
}

export type RobotsStructure = RobotStructure[];
