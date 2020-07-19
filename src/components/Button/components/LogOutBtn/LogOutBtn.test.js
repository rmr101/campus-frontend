import React from "react";
import { render, screen } from "@testing-library/react";
import {LogOutBtn} from "./LogOutBtn";

describe(" <LogOutBtn/> ", () => {
  it("should render LogOutBtn", () => {
    render(<LogOutBtn />);
    expect(screen.getByTestId("btn")).toBeInTheDocument();
  });
});
