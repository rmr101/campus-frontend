import React from 'react';
import {render} from '@testing-library/react';
import Header from './Header';

// describe('<Header/>',()=>{

//   let renderResult;
//   const props = {
//     title: "Dashboard",
//   }
//   beforeEach(()=>{
//     renderResult = render(<Header {...props}/>);
//   })

//   it("should render title",()=>{
//     const {getByText} = renderResult;
//     expect(getByText(props.title)).toBeInTheDocument();
//   })
// });

const sum = (a,b)=> a+b;
describe('sum',()=>{
  it("returns two",()=>{
    expect(sum(1,1)).toBe(2);
  })
})