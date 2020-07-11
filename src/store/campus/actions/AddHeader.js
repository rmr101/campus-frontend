import {ADD_HEADER } from "../type";

export default (headingTitle, toPageID, id = 0, courseID = 0) => ({
  headingTitle,
  toPageID,
  courseID,
  id,
  type: ADD_HEADER,
});
