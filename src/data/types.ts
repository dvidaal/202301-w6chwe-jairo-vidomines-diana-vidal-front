interface RobotStructure {
  image: string;
  name: string;
  stats: {
    speed: number;
    endurance: number;
    creation: Date;
  };
}

export type RobotsStructure = RobotStructure[];

export default RobotStructure;
