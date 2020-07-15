import React from "react";
import { render, screen } from "@testing-library/react";
import {
  FormItem,
  FormLayout,
  HorizontalRow,
  SmallText,
  Button,
  DummyButtonBlock,
  FormTitle,
} from "./FormLayout";

describe(" FormLayout ", () => {
  const TestMessage = "Testing"
  const TestingComponent = () => <div>{TestMessage}</div>;
  //TODO: test if the onClick pass down to the child
  const onClick = (i) => i + 1; 
  const props = {
    testprops: onClick.toString(),
  };
  
  it("should pass all props to the FormLayout", () => {
    render(<FormLayout {...props}> </FormLayout>);
    expect(screen.getByTestId("form").getAttribute("testprops")).toBe(
      onClick.toString()
    );
  });
  it("should pass all props to the Button", () => {
    render(<Button {...props}> </Button>);
    expect(screen.getByTestId("btn").getAttribute("testprops")).toBe(
      onClick.toString()
    );
  });

  it("should render children for each FormItem",()=>{
    render(<FormItem><TestingComponent/></FormItem>);
    expect(screen.getByText(TestMessage)).toBeInTheDocument();
  })

  it("should render children for FormLayout", () => {
    render(
      <FormLayout>
        <TestingComponent />
      </FormLayout>
    );

    expect(screen.getByText(TestMessage)).toBeInTheDocument();
  });
   it("should render children for each HorizontalRow", () => {
    render(
      <HorizontalRow>
        <TestingComponent />
      </HorizontalRow>
    );

    expect(screen.getByText(TestMessage)).toBeInTheDocument();});
  it("should render children for each FormTitle", () => {
    render(
      <FormTitle>
        <TestingComponent />
      </FormTitle>
    );

    expect(screen.getByText(TestMessage)).toBeInTheDocument();});
 it("should render children for each Button", () => {
   render(
     <Button>
       <TestingComponent />
     </Button>
   );
   expect(screen.getByText(TestMessage)).toBeInTheDocument();
 });
  it("should render children for each SmallText", () => {
    render(
      <SmallText>
        <TestingComponent />
      </SmallText>
    );
    expect(screen.getByText(TestMessage)).toBeInTheDocument();
  });
  it("should render children for each DummyButtonBlock", () => {
    render(
      <DummyButtonBlock>
        <TestingComponent />
      </DummyButtonBlock>
    );
    expect(screen.getByText(TestMessage)).toBeInTheDocument();
  });

})