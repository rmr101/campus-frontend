import React from 'react';
import {render, screen} from '@testing-library/react';
import Loading from './Loading';

describe("<Loading/>", () => {

  it("should render <Loading/>", () => {
    render(<Loading />);
    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });
});