import React from 'react';
import {render,screen} from '@testing-library/react';
import Header from './Header';

jest.mock("../../../Button", () => jest.fn(() => `<Button/>`));

describe('<Header/>',()=>{
  const testString = "Testing";
  it("should render children for the header correctly",()=>{
    render(<Header title={testString} />);
    expect(screen.getByText(testString)).toBeInTheDocument();
  })
});
