import { loadRobotsActionCreator, robotsReducer } from "./robotsSlice";

describe("Given a loadRobots reducer", () => {
  describe("When it receives a list of two robots", () => {
    test("Then it should return a list of two robots", () => {
      const robotRoomba = {
        id: "",
        name: "Roomba",
        image: "",
        stats: {
          speed: "",
          endurance: "",
          creationDate: "",
        },
      };

      const robotWalle = {
        id: "",
        name: "Walle",
        image: "",
        stats: {
          speed: "",
          endurance: "",
          creationDate: "",
        },
      };

      const robots = [robotRoomba, robotWalle];

      const loadRobotsAction = loadRobotsActionCreator(robots);
      const expectedResult = robots;

      const newRobots = robotsReducer(robots, loadRobotsAction);

      expect(newRobots).toStrictEqual(expectedResult);
    });
  });
});
