import React from 'react';
import {render,screen} from '@testing-library/react';
import Main from './Main';
import headerHistory from '../../store/campus/reducers/headerHistory';
import Authentication from "../../store/authentication/reducers/Authentication";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";



const initialState = {
  headerHistory: {
    title: "Title",
    content: {
      pageID: "PageID",
    },
  },
  Authentication:{role: "ADMIN"},
};
const reducer = combineReducers({
  headerHistory,
  Authentication,
});
const Wrapper = ({ children }) => (
  <Provider store={createStore(reducer, initialState)}>{children}</Provider>
);


jest.mock('./components/Content', ()=> jest.fn(()=> `<Content/>` ));
jest.mock("./components/Header", () =>
  jest.fn(() => `<Header/>`)
); 

describe("<Main/>", ()=>{

  beforeEach(()=>{
    render(<Main/>,{wrapper:Wrapper});
  })
it("should render header",()=>{
  expect(screen.getByTestId("header")).toBeInTheDocument();
})
it("should render Content", () => {
  expect(screen.getByTestId("content")).toBeInTheDocument();
});

})