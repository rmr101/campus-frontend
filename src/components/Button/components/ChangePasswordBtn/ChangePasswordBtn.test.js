import React from "react";
import { render, screen } from "@testing-library/react";
import ChangePasswordBtn from "./ChangePasswordBtn";

describe(" <ChangePasswordBtn/> ", () => {
  it("should render ChangePasswordBtn", () => {
    render(<ChangePasswordBtn />);
    expect(screen.getByTestId("btn")).toBeInTheDocument();
  });
});
