import { SET_LOGIN_STATUS } from "../../type";

export default (state = false, action) => {
  switch (action.type) {
    case SET_LOGIN_STATUS:
      console.log("i am getting run.");
      return true;
    default:
      return state;
  }
};
