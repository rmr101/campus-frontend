import React from "react";
import { render, screen } from "@testing-library/react";
import EnrolBtn from "./EnrolBtn";

describe(" <EnrolBtn/> ", () => {
  it("should render EnrolBtn", () => {
    render(<EnrolBtn />);
    expect(screen.getByTestId("btn")).toBeInTheDocument();
  });
});
