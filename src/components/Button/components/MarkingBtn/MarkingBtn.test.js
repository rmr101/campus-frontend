import React from "react";
import { render, screen } from "@testing-library/react";
import MarkingBtn from "./MarkingBtn";

describe(" <MarkingBtn/> ", () => {
  it("should render MarkingBtn", () => {
    render(<MarkingBtn />);
    expect(screen.getByTestId("btn")).toBeInTheDocument();
  });
});
