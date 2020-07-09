import {ADD_HEADER } from "../type";

export default (headingTitle, toPageID, id = "") => ({
  headingTitle,
  toPageID,
  id,
  type: ADD_HEADER,
});
