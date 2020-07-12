import React from "react";
import { render, screen } from "@testing-library/react";
import FullWidthLayout from "./FullWidthLayout";

describe("<FullWidthLayout />", () => {

  it("should render children component text", () => {
  const testMessage = "Test" ;
  const TestComponent = () => (
    <React.Fragment> {testMessage} </React.Fragment>
  );
    render(<FullWidthLayout ><TestComponent/></FullWidthLayout>);
    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });
});
