import { SET_CURRENT_DIRECTOR } from "../../type";

export default (state = "Dashboard", action) => {
  switch (action.type) {
    case SET_CURRENT_DIRECTOR:
      return action.payload;
    default:
      return state;
  }
};
