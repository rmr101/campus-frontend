import CampusSever from "../../utils/CampusSever";
import {Auth} from '../../utils/CampusSever/AuthenticatedAccess';


const courseUrl = "/subjects";

export default (postBody) =>{
  const AuthCampusSever = Auth(CampusSever);
  return AuthCampusSever.post(courseUrl, postBody);
  }
  