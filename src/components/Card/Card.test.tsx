import { render, screen } from "@testing-library/react";
import { RobotStructure } from "../../types";
import Card from "./Card";

describe("Give a Card component", () => {
  describe("When rendered", () => {
    test("Then it should return a rendered card with the name 'R2-D2' with a heading'", () => {
      const robot: RobotStructure = {
        _id: "",
        image: "",
        name: "R2-D2",
        stats: {
          speed: "",
          endurance: "",
          creationDate: "",
        },
      };

      render(<Card robot={robot} />);

      const result = screen.getByText("R2-D2");

      expect(result).toBeInTheDocument();
    });
  });
});
