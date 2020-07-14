import React from "react";
import { render, screen } from "@testing-library/react";
import HalfWidthLayout from "./HalfWidthLayout";
import styles from './HalfWidthLayout.module.scss';
describe("<HalfWidthLayout />", () => {
  
  it("should render detail title text", () => {
    const testMessage = "Test";
    render(
      <HalfWidthLayout title={testMessage}/>
    );
    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });

  it("should render detail description text", () => {
    const testMessage = "Test";
    render(<HalfWidthLayout description={testMessage} />);
    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });

  it("should render background when specified", () => {
    render(<HalfWidthLayout background/>);
    const  div  = screen.getByTestId("content");
    expect(div).toHaveClass(styles.functionalComponent);
  });

  it("should not render background when not specified", () => {
    render(<HalfWidthLayout/>);
    const div = screen.getByTestId("content");
    expect(div).not.toHaveClass(styles.functionalComponent);
  });
   it("should render children component text", () => {
     const testMessage = "Test";
     const TestComponent = () => (
       <React.Fragment> {testMessage} </React.Fragment>
     );
     render(
       <HalfWidthLayout>
         <TestComponent />
       </HalfWidthLayout>
     );
     expect(screen.getByText(testMessage)).toBeInTheDocument();
   });
});
