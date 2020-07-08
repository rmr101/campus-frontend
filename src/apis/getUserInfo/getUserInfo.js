import CampusSever from "../../utils/CampusSever";
import {Auth} from '../../utils/CampusSever/AuthenticatedAccess';


  const studentUrl = "/students";
  const teacherUrl = "/teachers";
  const config = {};

export default (role,id) =>{
  const AuthCampusSever = Auth(CampusSever);
  switch(role){
    case "student":
      return AuthCampusSever.get(studentUrl + `/${id}`, config)
        .then((res) => res.data.studentInfo)
        .catch((e) => console.log(e.response));
    case "teacher":
      return AuthCampusSever.get(teacherUrl + `/${id}`, config)
        .then((res) => res.data.teacherInfo)
        .catch((e) => console.log(e.response));
    default :
      return new Promise((resFunc, rejFunc) => {
        resFunc( "Admin");
        rejFunc(new Error("Oops!"));
      });
  }
  
  ;
}