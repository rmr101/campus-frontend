import React from "react";
import { render, screen } from "@testing-library/react";
import styles from './FormLayout.module.scss';
import {
  FormItem,
  FormLayout,
  HorizontalRow,
  SmallText,
  Button,
  DummyButtonBlock,
  FormTitle,
  SearchRow,
  SearchBtn,
  InFormLayout,
  AddBtn
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
  it("should pass all props to the InFormLayout", () => {
    render(<InFormLayout {...props}> </InFormLayout>);
    expect(screen.getByTestId("inform").getAttribute("testprops")).toBe(
      onClick.toString()
    );
  });
  it("should pass all props to the Button", () => {
    render(<Button {...props}> </Button>);
    expect(screen.getByTestId("btn").getAttribute("testprops")).toBe(
      onClick.toString()
    );
  });


  it("should pass all props to the SearchBtn", () => {
    render(<SearchBtn {...props}> </SearchBtn>);
    expect(screen.getByTestId("searchBtn").getAttribute("testprops")).toBe(
      onClick.toString()
    );
  });
  it("should pass all props to the SearchBtn", () => {
    render(<AddBtn {...props}> </AddBtn>);
    expect(screen.getByTestId("addBtn").getAttribute("testprops")).toBe(
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
  it("should render children for InFormLayout", () => {
    render(
      <InFormLayout>
        <TestingComponent />
      </InFormLayout>
    );
    expect(screen.getByText(TestMessage)).toBeInTheDocument();
  });
  

  it("should render children for successful class when 'success' is passed to FormLayout", () => {
  render(
    <FormLayout className={"success"}>
      <TestingComponent />
    </FormLayout>
  );
    expect(screen.getByTestId("form").getAttribute("class")).toBe(styles.success + " " + styles.form);
  });

  it("should render children for successful class when 'success' is passed to InFormLayout", () => {
    render(
      <InFormLayout className={"success"}>
        <TestingComponent />
      </InFormLayout>
    );
    expect(screen.getByTestId("inform").getAttribute("class")).toBe(
      styles.success + " " + styles.form
    );
  });
  it("should render children for error and searchSmall class when 'error' and 'searchBar' are passed to SmallText", () => {
    render(
      <SmallText className={"error"} searchBar>
        <TestingComponent />
      </SmallText>
    );
    expect(screen.getByTestId("small-test").getAttribute("class")).toBe(
      styles.error + " " +styles.searchSmall
    );
  });
   it("should render children for each HorizontalRow", () => {
    render(
      <HorizontalRow>
        <TestingComponent />
      </HorizontalRow>
    );

    expect(screen.getByText(TestMessage)).toBeInTheDocument();
  });

    it("should render children for each SearchRow", () => {
      render(
        <SearchRow>
          <TestingComponent />
        </SearchRow>
      );
      expect(screen.getByText(TestMessage)).toBeInTheDocument();
    });
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
