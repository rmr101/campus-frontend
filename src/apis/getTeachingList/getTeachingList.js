import CampusSever from "../../utils/CampusSever";
import { Auth } from "../../utils/CampusSever/AuthenticatedAccess";
import store from '../../store';
// make it empty for now
const url = "/teachers"

export default () =>{
  const AuthCampusSever = Auth(CampusSever);
  const state = store.getState();
  const UUID = state.Authentication.uuid;
  console.log("I am getting teaching");
  return AuthCampusSever.get(`${url}/${UUID}`)
    .then((res) => res.data)
    .catch((e) => console.log(e));
}