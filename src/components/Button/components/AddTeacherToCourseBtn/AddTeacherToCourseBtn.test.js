import React from "react";
import { render, screen } from "@testing-library/react";
import AddTeacherToCourseBtn from "./AddTeacherToCourseBtn";

describe(" <AddTeacherToCourseBtn/> ", () => {
  it("should render AddTeacherToCourseBtn", () => {
    render(<AddTeacherToCourseBtn />);
    expect(screen.getByTestId("btn")).toBeInTheDocument();
  });
});
