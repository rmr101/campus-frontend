import React from "react";
import { render, screen } from "@testing-library/react";
import {TableItem,TableLayout,Row,HeaderRow,IndexItem} from './TableLayout';

describe(" TableLayout ", () => {
  const TestMessage = "Testing"
  const TestingComponent = () => <div>{TestMessage}</div>;
  //TODO: test if the onClick pass down to the child
  const onClick = (i) => i + 1; 
  const props = {
    testprops: onClick.toString(),
  };
  
  it("should pass all props to the TableItem", () => {
    
    render(
      <TableItem {...props}></TableItem>
    );
    expect(screen.getByTestId("table-item").getAttribute("testprops")).toBe(
      onClick.toString()
    );
  });
  it("should pass all props to the Row", () => {
    render(<Row {...props}></Row>);
    expect(screen.getByTestId("row").getAttribute("testprops")).toBe(
      onClick.toString()
    );
  });

  it("should render children for each TableItem",()=>{
    render(<TableItem><TestingComponent/></TableItem>);
    expect(screen.getByText(TestMessage)).toBeInTheDocument();
  })

  it("should render children for TableLayout", () => {
    render(
      <TableLayout>
        <TestingComponent />
      </TableLayout>
    );

    expect(screen.getByText(TestMessage)).toBeInTheDocument();
  });
   it("should render children for each Row", () => {
    render(
      <Row>
        <TestingComponent />
      </Row>
    );

    expect(screen.getByText(TestMessage)).toBeInTheDocument();});
  it("should render children for each HeaderRow", () => {
    render(
      <HeaderRow>
        <TestingComponent />
      </HeaderRow>
    );

    expect(screen.getByText(TestMessage)).toBeInTheDocument();});
 it("should render children for each IndexItem", () => {
   render(
     <IndexItem>
       <TestingComponent />
     </IndexItem>
   );
   expect(screen.getByText(TestMessage)).toBeInTheDocument();
 });

})