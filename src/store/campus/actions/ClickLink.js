import { ADD_HEADER_HISTORY } from "../../type";

export default (event, headingTitle, id = 0, LinkNameID = "") => ({
  event,
  headingTitle,
  id,
  LinkNameID,
  type: ADD_HEADER_HISTORY,
});
