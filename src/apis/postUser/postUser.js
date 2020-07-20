import CampusSever from "../../utils/CampusSever";
import {Auth} from '../../utils/CampusSever/AuthenticatedAccess';


const studentUrl = "/users/students";
const teacherUrl = "/users/teachers";

export default (role,postBody) =>{
  let url;
  switch (role) {
    case "Teacher":
      url = teacherUrl;
      break;
    case "Student":
      url = studentUrl; 
      break;
    default:
      break
  }
  const AuthCampusSever = Auth(CampusSever);
  return AuthCampusSever.post(url, postBody);
  }
  