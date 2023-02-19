import { render, screen } from "@testing-library/react";
import App from "./App";
import Wrapper from "../../mocks/Wrapper";
import GlobalStyles from "../../styles/GlobalStyles";

describe("Given a component App", () => {
  describe("When rendered", () => {
    test("Then it should show a header with the title 'Robodex'", () => {
      const expectedResult = "ROBODEX";

      render(
        <Wrapper>
          <GlobalStyles />
          <App />
        </Wrapper>
      );

      const result = screen.getByRole("heading", { name: expectedResult });
      expect(result).toBeInTheDocument();
    });
  });
});
