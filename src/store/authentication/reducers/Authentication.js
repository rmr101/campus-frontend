import { STORE_AUTH_TO_STATE, LOG_OUT } from "../type";


const jwt = localStorage.getItem("jwt");
const role = localStorage.getItem("role");
const uuid = localStorage.getItem("userID");

const initialState = {
  jwt,
  role,
  uuid,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_AUTH_TO_STATE:
      localStorage.setItem("jwt", action.payload.jwt);
      localStorage.setItem("userID", action.payload.uuid);
      localStorage.setItem("role", action.payload.role);
      return action.payload;
    case LOG_OUT:
      localStorage.clear();
      return {
        jwt: null,
        role: null,
        uuid: null,
      };
    default:
      return state;
  }
};
