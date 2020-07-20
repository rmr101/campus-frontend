import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CanvasPagination from "./CanvasPagination";

describe(" <CanvasPagination /> ", () => {

  it("should render corresponding page number after clicking next and prev button", async () => {
    const { getByTestId, getByText } = render(<TestPage />);
    fireEvent.click(getByTestId("prev"));
    expect(getByText("1", { exact: false })).toBeInTheDocument();
    fireEvent.click(getByTestId("next"));
    expect(getByText("2", { exact: false })).toBeInTheDocument();
  });


  it("should render page number correctly", async () => {
    const testCurrentPage = 1;
    const testTotalPage = 10;
    const testString = `${testCurrentPage} / ${testTotalPage}`;
    render(
      <CanvasPagination
        currentPage={testCurrentPage}
        totalPage={testTotalPage}
      />
    );
    expect(screen.getByText(testString)).toBeInTheDocument();
  });

});

class TestPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 2,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }
  handlePageChange(page) {
    this.setState({ page: page });
  }
  render() {
    const { page } = this.state;
    return (
      <CanvasPagination
        currentPage={page}
        handlePageChange={this.handlePageChange}
      />
    );
  }
}
