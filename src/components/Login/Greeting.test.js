import React from "react";
import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe(" <Greeting/> ", () => {
  it("should render Greeting", () => {
    render(<Greeting />);
    expect(screen.getByTestId("greeting")).toBeInTheDocument();
  });
});
