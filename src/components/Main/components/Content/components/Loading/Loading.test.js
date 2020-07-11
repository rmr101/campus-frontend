import React from 'react';
import {render, screen} from '@testing-library/react';
import Loading from './Loading';

describe("<Loading/>", () => {

  it("should render Loading...", () => {
    const LoadingText = "Loading...";
    render(<Loading />);
    expect(screen.getByText(LoadingText)).toBeInTheDocument();
  });
});