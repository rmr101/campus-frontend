import React from "react";
import { render, screen } from "@testing-library/react";
import {DisplayTitle,DisplaySubHeading,DisplayContent,DisplayLayout} from './DisplayContentLayout';
describe(" DisplayContentLayout ", () => {
  const TestMessage = "Testing";
  const TestingComponent = () => <div>{TestMessage}</div>;

  it("should render children for DisplayTitle", () => {
    render(
      <DisplayTitle>
        <TestingComponent />
      </DisplayTitle>
    );
    expect(screen.getByText(TestMessage)).toBeInTheDocument();
  });

  it("should render children for each DisplaySubHeading", () => {
    render(
      <DisplaySubHeading>
        <TestingComponent />
      </DisplaySubHeading>
    );

    expect(screen.getByText(TestMessage)).toBeInTheDocument();
  });
  it("should render children for each DisplayContent", () => {
    render(
      <DisplayContent>
        <TestingComponent />
      </DisplayContent>
    );

    expect(screen.getByText(TestMessage)).toBeInTheDocument();
  });
  it("should render children for DisplayLayout", () => {
    render(
      <DisplayLayout>
        <TestingComponent />
      </DisplayLayout>
    );
    expect(screen.getByText(TestMessage)).toBeInTheDocument();
  });
})