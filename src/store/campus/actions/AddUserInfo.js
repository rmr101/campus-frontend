import { ADD_USER_INFO } from "../type";

export default (name, avatar = "") => ({
  name,
  avatar,
  type: ADD_USER_INFO,
});
