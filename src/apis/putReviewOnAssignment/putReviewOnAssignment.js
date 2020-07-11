import CampusSever from "../../utils/CampusSever";
import {Auth} from '../../utils/CampusSever/AuthenticatedAccess';

const assignmentUrl = "/assignments";
const teacherUrl = "/teachers";

export default (id,score,comment) => {
  const AuthCampusSever = Auth(CampusSever);
  return AuthCampusSever.put(`${teacherUrl}${assignmentUrl}/${id}`, {score,comment})
}
