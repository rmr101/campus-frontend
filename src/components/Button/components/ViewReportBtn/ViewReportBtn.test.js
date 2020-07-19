import React from "react";
import { render, screen } from "@testing-library/react";
import ViewReportBtn from "./ViewReportBtn";

describe(" <ViewReportBtn/> ", () => {
  it("should render ViewReportBtn", () => {
    render(<ViewReportBtn />);
    expect(screen.getByTestId("btn")).toBeInTheDocument();
  });
});
