import React from 'react';
import Main from './Main';
import {render} from '@testing-library/react';

describe('<Main/>',()=>{

  let renderResult;
  const props = {
    pageID: "Dashboard",
    title: "Dashboard",
  }
  beforeEach(()=>{
    renderResult = render(<Main {...props}/>);
  })

  it("should render title",()=>{
    const {getByText} = renderResult;
    expect(getByText(props.title)).toBeInTheDocument();
  })
});