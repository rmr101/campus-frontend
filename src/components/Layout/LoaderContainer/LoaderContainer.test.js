import React from "react";
import { render, screen } from "@testing-library/react";
import LoaderContainer from "./LoaderContainer";

describe("<LoaderContainer />", () => {
  it("should render children component text", () => {
    const testMessage = "Test";
    const TestComponent = () => (
      <React.Fragment> {testMessage} </React.Fragment>
    );
    render(
      <LoaderContainer>
        <TestComponent />
      </LoaderContainer>
    );
    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });
});
