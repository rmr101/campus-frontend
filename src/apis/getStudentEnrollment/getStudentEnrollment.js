import CampusSever from "../../utils/CampusSever";
import { Auth } from "../../utils/CampusSever/AuthenticatedAccess";
import store from "../../store";

const studentUrl = "/students/";
const query = {
  params: {
    detail: "courses",
  },
};
export default () => {
  const state = store.getState();
  const studentUuid = state.Authentication.uuid;
  const AuthCampusSever = Auth(CampusSever);
  return AuthCampusSever.get(`${studentUrl}${studentUuid}`, query)
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.log(e));
};