import { CLICK_HEADER } from "../../type";

export default (event,id) => ({
  event:event,
  headingID: id,
  type: CLICK_HEADER,
});
