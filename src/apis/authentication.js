import CampusSever from "../utils/CampusSever/CampusSever";

//TODO: 后端要提供一个接口给我validate 我的jwt

const AuthUrl = "/authenticate";

export const login = (username, password) =>
  {console.log("I got run");
  return CampusSever.post(AuthUrl, { username, password });};