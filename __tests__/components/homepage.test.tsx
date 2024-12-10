import { render, screen } from "@testing-library/react";
import Page from "@/app/page";

describe("Show home page", () => {
  it("renders home page", () => {
    render(<Page />);
    expect(screen.getByText("Hello world"));
  });
});
