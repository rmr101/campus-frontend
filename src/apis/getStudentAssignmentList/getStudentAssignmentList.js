import CampusSever from "../../utils/CampusSever";
import { Auth } from "../../utils/CampusSever/AuthenticatedAccess";
import store from "../../store";
// make it empty for now

const studentUrl = "/students/";
const query = {
  params: {
    detail: "assignments",
  },
};
export default () => {
  const state = store.getState();
  const uuid = state.Authentication.uuid;
  const AuthCampusSever = Auth(CampusSever);
  return AuthCampusSever.get(`${studentUrl}${uuid}`, { ...query })
    .then((res) => res.data)
    .catch((e) => console.log(e));
};
