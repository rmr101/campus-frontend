import React from "react";
import {
  DisplayLayout,
  DisplaySubHeading,
  DisplayContent,
} from "../../../Layout/DisplayContentLayout/DisplayContentLayout";
// Post object would need a name

export default ({ comment, score }) => (
  <DisplayLayout>
    <DisplaySubHeading>Score:</DisplaySubHeading>
    <DisplayContent>{score}</DisplayContent>
    <DisplaySubHeading>Comment:</DisplaySubHeading>
    <DisplayContent>{comment}</DisplayContent>
  </DisplayLayout>
);