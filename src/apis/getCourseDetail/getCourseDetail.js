import CampusSever from "../../utils/CampusSever";
import { Auth } from "../../utils/CampusSever/AuthenticatedAccess";

const url = "/courses/";
const queryStudent = {
  params: {
    detail: "students",
  },
};
const queryTeacher = {
  params: {
    detail: "teachers",
  },
};

export default (id, detail = "students") => {
  const AuthCampusSever = Auth(CampusSever);
  if (detail === "students") {
    return AuthCampusSever.get(`${url}${id}`, queryStudent)
      .then((res) => {
        return res.data;
      })
      .catch((e) => console.log(e));
  } else if(detail === "teachers") {
    return AuthCampusSever.get(`${url}${id}`, queryTeacher)
      .then((res) => {
        return res.data;
      })
      .catch((e) => console.log(e));
  }
};