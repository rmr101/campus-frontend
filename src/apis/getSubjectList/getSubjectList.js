import CampusSever from "../../utils/CampusSever";
import { Auth } from "../../utils/CampusSever/AuthenticatedAccess";

// make it empty for now
const url = "/subjects"

export default () =>{
  const AuthCampusSever = Auth(CampusSever);
  return AuthCampusSever.get(url)
    .then((res) => res.data)
    .catch((e) => console.log(e));
}