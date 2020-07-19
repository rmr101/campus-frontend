import React from "react";
import { render, screen } from "@testing-library/react";
import styles from "./Loader.module.scss";
import Loader from "./Loader";

describe(" <Loader/> ", () => {
 
  it("should render different color when passed down", () => {
    render(<Loader color={"color"} />);
    expect(screen.getByTestId("loader").getAttribute("class")).toBe(
      styles.circle + " " + styles.color
    );
  });
})
