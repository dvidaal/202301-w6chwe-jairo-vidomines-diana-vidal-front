import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a Header Component", () => {
  describe("When rendered", () => {
    test("Then it should return the text 'ROBODEX' inside a header", () => {
      const expectedResult = "ROBODEX";

      render(<Header />);

      const result = screen.getByText(expectedResult);

      expect(result).toBeInTheDocument();
    });
  });
});
