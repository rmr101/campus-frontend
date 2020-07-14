import CampusSever from "../../utils/CampusSever";
import {Auth} from '../../utils/CampusSever/AuthenticatedAccess';


const courseUrl = "/courses";

export default (subjectID,courseDetail) =>{
  const postBody =
    {...courseDetail,
    subjectID,}
  const AuthCampusSever = Auth(CampusSever);
  AuthCampusSever.post(courseUrl, postBody)
        .then(() => console.log('post successfully'))
        .catch(console.log);
  }
  