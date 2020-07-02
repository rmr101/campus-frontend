import { SET_LOGIN_STATUS,LOGOUT } from "../../type";

export default (state = false, action) => {
  switch (action.type) {
    case SET_LOGIN_STATUS:
      return true;
    case LOGOUT:
      return false;
    default:
      return state;
  }
};
