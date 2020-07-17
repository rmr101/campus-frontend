import CampusSever from "../../utils/CampusSever";
import {Auth} from '../../utils/CampusSever/AuthenticatedAccess';


const courseUrl = "/courses";

export default (putBody) =>{
  const AuthCampusSever = Auth(CampusSever);
  return AuthCampusSever.put(courseUrl, putBody);
  }
  