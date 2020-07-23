import CampusSever from "../../utils/CampusSever";
import { Auth } from "../../utils/CampusSever/AuthenticatedAccess";

const teacherUrl = "/teachers";
const assignmentUrl = "/assignments";


export default (objectKey) => {
  const config = {
    params:{
      objectKey,
    }
  };
  const AuthCampusSever = Auth(CampusSever);
  return AuthCampusSever.get(`${teacherUrl}${assignmentUrl}`, config)
    .then((res) => res.data)
    .catch(console.log);
};
