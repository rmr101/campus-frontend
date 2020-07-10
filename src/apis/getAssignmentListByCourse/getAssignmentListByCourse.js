import CampusSever from "../../utils/CampusSever";
import { Auth } from "../../utils/CampusSever/AuthenticatedAccess";

// make it empty for now

const url = "/courses/";
const query = {
  params: {
    detail: "assignments",
  },
};
export default (id) =>
  {
  console.log("I got run");
  const AuthCampusSever = Auth(CampusSever);
  return AuthCampusSever.get(`${url}${id}`,query)
    .then((res) => {
      console.log(res.data);
      return res.data})
    .catch((e) => console.log(e));
  }