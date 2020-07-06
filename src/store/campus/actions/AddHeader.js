import {ADD_HEADER } from "../type";

export default (event, headingTitle, toPageID, id = "") => ({
  event,
  headingTitle,
  toPageID,
  id,
  type: ADD_HEADER,
});
