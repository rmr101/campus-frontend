import {ADD_HEADER } from "../type";

export default (headingTitle, toPageID, id = "") => {
  console.log("I got run");
  return {
  headingTitle,
  toPageID,
  id,
  type: ADD_HEADER,
}}
