import CampusSever from "../../utils/CampusSever";
import { Auth } from "../../utils/CampusSever/AuthenticatedAccess";

// make it empty for now

const url = 'users';

export default (uuid) => {
  const AuthCampusSever = Auth(CampusSever);
  return AuthCampusSever.delete(url+`/${uuid}`);
};