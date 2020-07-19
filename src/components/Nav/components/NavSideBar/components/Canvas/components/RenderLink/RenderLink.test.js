import React from "react";
import { render, screen} from "@testing-library/react";
import RenderLink from "./RenderLink";
import headerHistory from "../../../../../../../../store/campus/reducers/headerHistory";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

const initialState = {
  headerHistory: {
    title: "Title",
    content: {
      pageID: "PageID",
    },
  },
};
const reducer = combineReducers({
  headerHistory,
});
const Wrapper = ({ children }) => (
  <Provider store={createStore(reducer, initialState)}>{children}</Provider>
);

describe("<RenderLink/>", () => {
  const testNameArray = [
    { name: "test1", id: 1 },
    { name: "test2", id: 2 },
  ];
  
  it("should render capitalised title correctly", () => {
    render(<RenderLink RenderArray={testNameArray} />, { wrapper: Wrapper });
    expect(screen.getByText("Test1")).toBeInTheDocument();
    expect(screen.getByText("Test2")).toBeInTheDocument();
  });
 
});
