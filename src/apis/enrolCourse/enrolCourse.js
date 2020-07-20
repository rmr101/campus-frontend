import CampusSever from "../../utils/CampusSever";
import {Auth} from '../../utils/CampusSever/AuthenticatedAccess';
import store from '../../store';

const studentUrl = "/students/"
const courseUrl = "/courses";

export default (courseId) => {
  const state = store.getState();
  const studentUuid = state.Authentication.uuid;
  const postBody = { studentUuid, courseId };
  const AuthCampusSever = Auth(CampusSever);
  
  return AuthCampusSever.post(
    `${studentUrl}${studentUuid}${courseUrl}`,
    postBody
  );
};
  