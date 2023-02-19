import { render, screen } from "@testing-library/react";
import { RobotsStructure } from "../../data/types";
import Wrapper from "../../mocks/Wrapper";
import CardList from "./CardList";

describe("Given a card list component", () => {
  describe("When rendered", () => {
    test("Then it should show a list of robots with properties", () => {
      const fakeRobotsList: RobotsStructure = [
        {
          _id: "",
          name: "Thermomix",
          image: "",
          stats: {
            speed: "",
            endurance: "",
            creationDate: "",
          },
        },
        {
          _id: "",
          name: "Eva",
          image: "",
          stats: {
            speed: "",
            endurance: "",
            creationDate: "",
          },
        },
      ];

      jest.mock("../../store/hooks", () => ({
        ...jest.requireActual("../../store/hooks"),
        useAppSelector: () => fakeRobotsList,
      }));

      render(
        <Wrapper>
          <CardList />
        </Wrapper>
      );

      const result = screen.getAllByRole("list");

      result.forEach((image) => {
        expect(image).toBeInTheDocument();
      });
    });
  });
});
