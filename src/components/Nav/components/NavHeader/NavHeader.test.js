import React from "react";
import { render, screen } from "@testing-library/react";
import NavHeader from "./NavHeader";

describe("<NavHeader/>", () => {
  beforeEach(() => {
    render(<NavHeader />);
  });
  it("should render logo", () => {
    expect(screen.getByTestId("logo")).toBeInTheDocument();
  });

});
