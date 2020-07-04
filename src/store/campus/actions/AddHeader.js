import {ADD_HEADER } from "../type";

export default (event,headingTitle, contentType, id = "") => ({
  event,
  headingTitle,
  contentType,
  id,
  type: ADD_HEADER,
});
