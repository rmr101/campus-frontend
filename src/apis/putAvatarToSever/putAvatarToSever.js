import CampusSever from "../../utils/CampusSever";
import {Auth} from '../../utils/CampusSever/AuthenticatedAccess';
import store from '../../store';
import AddUserAvatar from '../../store/campus/actions/AddUserAvatar';
  const studentUrl = "/students";
  const teacherUrl = "/teachers";

export default (avatar) =>{
  const AuthCampusSever = Auth(CampusSever);
  store.dispatch(AddUserAvatar(avatar));
  const state = store.getState();
  const role = state.Authentication.role.toLowerCase();
  const uuid = state.Authentication.uuid;
  switch(role){
    case "student":
      return AuthCampusSever.put(studentUrl + `/${uuid}`, {
        avatar:"hello"})
        .then(() => console.log(avatar))
        .catch(console.log);
    case "teacher":
      return AuthCampusSever.put(teacherUrl + `/${uuid}`, {
        avatar: "hello",
      })
        .then(() => console.log(avatar))
        .catch(console.log);
    default :
      return new Promise((resFunc, rejFunc) => {
        resFunc( "Admin");
        rejFunc(new Error("Oops!"));
      });
  }
  
  ;
}