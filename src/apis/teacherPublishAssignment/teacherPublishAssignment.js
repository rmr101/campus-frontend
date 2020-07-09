import CampusSever from "../../utils/CampusSever";
import { Auth } from "../../utils/CampusSever/AuthenticatedAccess";
import store from "../../store";

// // make it empty for now

const assignmentUrl = "assignments/";
const courseUrl = "courses/";

export default (title, AC, content,dueDate, courseID) => {
  const state = store.getState();
  const name = state.userInfo.name;
  const AuthCampusSever = Auth(CampusSever);
  return AuthCampusSever.post(`${courseUrl}${courseID}/${assignmentUrl}`, {
    title,
    acceptanceCriteria: AC,
    content,
    dueDate,
    publisher: name,
  });
};
