import CampusSever from "../../utils/CampusSever";
import { Auth } from "../../utils/CampusSever/AuthenticatedAccess";
import store from '../../store';
// make it empty for now

const coursesUrl = "/courses/";
const studentUrl = "/students"
const assignmentUrl = "/assignments/";

export default (id,secondID) => {
  const state = store.getState();
  const role = state.Authentication.role;
  const AuthCampusSever = Auth(CampusSever);
  if (role === "TEACHER") {
    return AuthCampusSever.get(`${coursesUrl}${secondID}${assignmentUrl}${id}`)
      .then((res) => res.data)
      .catch((e) => console.log(e));
  } else if (role === "STUDENT"){
    return AuthCampusSever.get(`${studentUrl}${assignmentUrl}${id}`)
      .then((res) => {console.log(res.data);
        return res.data})
      .catch((e) => console.log(e));
  }
};