import React from "react";
import { render, screen } from "@testing-library/react";
import CanvasTitleWrap from "./CanvasTitleWrap";

describe(" <CanvasTitleWrap/> ", () => {
  const testMessage = "Test";
  const testTitle = "Title";
  const TestComponent = () => <React.Fragment> {testMessage} </React.Fragment>;
  it("should render testTitle and testMessage for CanvasTitleWrap", () => {
    render(
      <CanvasTitleWrap title={testTitle}>
        <TestComponent />
      </CanvasTitleWrap>
    );
    expect(screen.getByText(testMessage)).toBeInTheDocument();
    expect(screen.getByText(testTitle)).toBeInTheDocument();
  });
});
