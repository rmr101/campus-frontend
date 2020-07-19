import React from "react";
import { render,screen,fireEvent} from "@testing-library/react";
import NavAvatar from "./NavAvatar";
import getUserInfo from "../../../../apis/getUserInfo";
import SelectAvatar from "./components/SelectAvatar";

jest.mock("./components/SelectAvatar",()=>jest.fn(()=>`<SelectAvatar/>`))
jest.mock("../../../../apis/getUserInfo", () => jest.fn());

describe("<NavAvatar />", () => {
  const data = {
    avatar: "faUserTie blue dark",
  };
  let renderResult;

  beforeEach(() => {
    getUserInfo.mockClear();
    getUserInfo.mockResolvedValue({
      data,
    });
    renderResult = render(<NavAvatar />);
  });

  it("should call getUserInfo ", () => {
    expect(getUserInfo).toBeCalled();
  });
  it("should render avatar", () => {
    expect(screen.getByTestId("avatar")).toBeInTheDocument();
  });

  it("should render selection panel when avatar is clicked",()=>{

    fireEvent.click(screen.getByTestId("avatar"));
    expect(SelectAvatar).toBeCalled();
  })
});