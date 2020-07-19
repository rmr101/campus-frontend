import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { RenderLayout, Hamburger } from "./Layout";


const mockNav = `<Nav />`;
jest.mock("../Main", () => jest.fn(() => `<Main />`));
jest.mock("../Nav", () => jest.fn(() => mockNav)); 

describe(" <Layout/ > ", () => {
  
  it("should render children for RenderLayout", () => {
    const TestMessage = "Testing";
    const TestingComponent = () => <div>{TestMessage}</div>;

    render(<RenderLayout><TestingComponent /></RenderLayout>);
    expect(screen.getByText(TestMessage)).toBeInTheDocument();
  });

  
  it("should toggle nav onClick", () => {
    const ToggleHamburger = () => {
      const [showNav, setShowNav] = React.useState(false);
      return <Hamburger showNav={showNav} setShowNav={setShowNav} />;
    };
    const { getByTestId } = render(<ToggleHamburger />);
    fireEvent.click(getByTestId("hamburger"));
    expect(screen.getByText(mockNav, { exact: false })).toBeInTheDocument();
  });
});
