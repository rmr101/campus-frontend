import { ADD_HEADER_HISTORY } from "../../type";

export default (event, headingTitle,id=0) => ({
  event,
  headingTitle,
  id,
  type: ADD_HEADER_HISTORY,
});
