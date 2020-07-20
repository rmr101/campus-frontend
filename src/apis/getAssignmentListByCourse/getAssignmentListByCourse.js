import CampusSever from "../../utils/CampusSever";
import { Auth } from "../../utils/CampusSever/AuthenticatedAccess";

const url = "/courses/";
const query = {
  params: {
    detail: "assignments",
  },
};
export default (id) =>
  {
  const AuthCampusSever = Auth(CampusSever);
  return AuthCampusSever.get(`${url}${id}`,query)
    .then((res) => res.data)
    .catch((e) => console.log(e));
  }