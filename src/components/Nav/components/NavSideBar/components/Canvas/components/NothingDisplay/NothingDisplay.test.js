import React from "react";
import { render, screen } from "@testing-library/react";
import NothingDisplay from "./NothingDisplay";

describe(" <NothingDisplay/> ", () => {
  const testMessage = "Test";
  it("should render input name for NothingDisplay", () => {
    render(<NothingDisplay name={testMessage} />);
    expect(screen.getByText(testMessage, { exact: false })).toBeInTheDocument();
  });
});
