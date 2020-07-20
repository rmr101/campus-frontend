import CampusSever from "../../utils/CampusSever";
import { Auth } from "../../utils/CampusSever/AuthenticatedAccess";
// make it empty for now
const studentUrl = "/students";
const assignmentUrl = "/assignments/";

export default (location,id) => {
  const data = { attachmentUrl: location };
  const AuthCampusSever = Auth(CampusSever);
  return AuthCampusSever.put(`${studentUrl}${assignmentUrl}${id}`,data);
};
