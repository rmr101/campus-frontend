import CampusSever from "../../utils/CampusSever";
import { Auth } from "../../utils/CampusSever/AuthenticatedAccess";

const courseQueryNameUrl = "/query/courses?name";
const courseQueryIdUrl = "/query/courses?id";
const config = {};

export default (query, keyword) => {
  const AuthCampusSever = Auth(CampusSever);
  switch (query) {
    case "courseId":
      return AuthCampusSever.get(courseQueryIdUrl + `=${keyword}`, config)
        .then((res) => res.data.studentList)
        .catch((e) => console.log(e.response));
    case "courseName":
      return AuthCampusSever.get(courseQueryNameUrl + `=${keyword}`, config)
        .then((res) => res.data.studentList)
        .catch((e) => console.log(e.response));
    default:
      return new Promise((resFunc, rejFunc) => {
        resFunc("Admin");
        rejFunc(new Error("Oops!"));
      });
  }
};
