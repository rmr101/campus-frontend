import CampusSever from "../../utils/CampusSever";
import { Auth } from "../../utils/CampusSever/AuthenticatedAccess";

// make it empty for now

const coursesUrl = "/courses/";
const assignmentUrl = "/assignments/";

export default (id,courseID) => {
  const AuthCampusSever = Auth(CampusSever);
  return AuthCampusSever.get(`${coursesUrl}${courseID}${assignmentUrl}${id}`)
    .then((res) => res.data)
    .catch((e) => console.log(e));
};