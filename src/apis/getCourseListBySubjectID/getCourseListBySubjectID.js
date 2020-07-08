import CampusSever from "../../utils/CampusSever";
import { Auth } from "../../utils/CampusSever/AuthenticatedAccess";

// make it empty for now

const url = 'subjects/';

export default (id) =>
  {
  const AuthCampusSever = Auth(CampusSever);
  return AuthCampusSever.get(`${url}${id}`)
    .then((res) => {
      return res.data})
    .catch((e) => console.log(e));
  }