import React from "react";
import { render, screen } from "@testing-library/react";
import UploadBtn from "./UploadBtn";

describe(" <UploadBtn/> ", () => {
  it("should render UploadBtn", () => {
    render(<UploadBtn />);
    expect(screen.getByTestId("btn")).toBeInTheDocument();
  });
});
