import { CHANGE_ROLE } from "../../type";

export default (state = "", action) => {
  switch (action.type) {
    case CHANGE_ROLE:
      return action.payload;
    default:
      return state;
  }
};