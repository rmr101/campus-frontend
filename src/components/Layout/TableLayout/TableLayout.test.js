import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import {TableItem,TableLayout,Row,HeaderRow,IndexItem,Page} from './TableLayout';

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


  it("should render corresponding page number after clicking next and prev button", async () => {
    const { getByTestId,getByText} = render(<TestPage />);
    fireEvent.click(getByTestId("prev"));
    expect(getByText("1", { exact: false })).toBeInTheDocument();
    fireEvent.click(getByTestId("next"));
    expect(getByText("2", { exact: false })).toBeInTheDocument();
  });

})

class TestPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 2,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }
  handlePageChange(page) {
    this.setState({ page:page });
  }
  render(){
    const {page} = this.state;
    return <Page currentPage={page} handlePageChange={this.handlePageChange} />;
  }
}