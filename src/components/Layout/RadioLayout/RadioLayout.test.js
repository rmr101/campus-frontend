import React from "react";
import { render, screen } from "@testing-library/react";
import {
  RadioLayout,
  RadioItem,
  RadioTitle,
} from "./RadioLayout";

describe(" RadioLayout ", () => {
  const TestMessage = "Testing";
  const TestingComponent = () => <div>{TestMessage}</div>;
 
  it("should render children for each RadioLayout", () => {
    render(
      <RadioLayout>
        <TestingComponent />
      </RadioLayout>
    );
    expect(screen.getByText(TestMessage)).toBeInTheDocument();
  });

  it("should render children for RadioTitle", () => {
    render(
      <RadioTitle>
        <TestingComponent />
      </RadioTitle>
    );
    expect(screen.getByText(TestMessage)).toBeInTheDocument();
  });
  it("should render children for each RadioItem", () => {
    render(
      <RadioItem>
        <TestingComponent />
      </RadioItem>
    );

    expect(screen.getByText(TestMessage)).toBeInTheDocument();
  });
});