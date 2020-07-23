import CampusSever from "../../utils/CampusSever";
import { Auth } from "../../utils/CampusSever/AuthenticatedAccess";
// make it empty for now
const studentUrl = "/students";
const assignmentUrl = "/assignments/";

export default (fileName,id) => {
  const data = { fileName, };
  const AuthCampusSever = Auth(CampusSever);
  return AuthCampusSever.put(`${studentUrl}${assignmentUrl}${id}`,data)
  .then(res=>res.data)
  .catch(console.log);
};
