import CampusSever from "../../utils/CampusSever";
import { Auth } from "../../utils/CampusSever/AuthenticatedAccess";
import store from '../../store';
// make it empty for now
const url = "/teachers"
const query = {
  params:{
      detail: "courses",
    }
  }

export default () =>{
  const AuthCampusSever = Auth(CampusSever);
  const state = store.getState();
  const UUID = state.Authentication.uuid;
  return AuthCampusSever.get(`${url}/${UUID}`, query)
    .then((res) => res.data)
    .catch((e) => console.log(e));
}