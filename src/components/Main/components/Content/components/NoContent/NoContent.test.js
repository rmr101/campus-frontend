import React from 'react';
import {render, screen} from '@testing-library/react';
import NoContent from './NoContent.test';

describe("<NoContent/>", () => {

  it("should render Message", () => {
    const testMessage = "Test Message";
    render(<NoContent text={testMessage} />);
    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });
});