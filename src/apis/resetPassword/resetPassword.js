import CampusSever from "../../utils/CampusSever";
import { Auth } from "../../utils/CampusSever/AuthenticatedAccess";

// make it empty for now

const url = 'users/';
const passwordUrl = "/password";

export default (uuid) => {
  const AuthCampusSever = Auth(CampusSever);
  return AuthCampusSever.put(`${url}${uuid}${passwordUrl}`);
};