import CampusSever from "../../utils/CampusSever";
import { Auth } from "../../utils/CampusSever/AuthenticatedAccess";

const studentQueryIdUrl = "/query/students?campusId";
const studentQueryNameUrl = "/query/students?name";
const teacherQueryIdUrl = "/query/teachers?campusId";
const teacherQueryNameUrl = "/query/teachers?name";
const config = {};

export default (query, keyword) => {
  const AuthCampusSever = Auth(CampusSever);
  switch (query) {
    case "studentId":
      return AuthCampusSever.get(studentQueryIdUrl + `=${keyword}`, config)
        .then((res) => res.data.studentList)
        .catch((e) => console.log(e.response));
    case "studentName":
      return AuthCampusSever.get(studentQueryNameUrl + `=${keyword}`, config)
        .then((res) => res.data.studentList)
        .catch((e) => console.log(e.response));
    case "teacherId":
      return AuthCampusSever.get(teacherQueryIdUrl + `=${keyword}`, config)
        .then((res) => res.data.teacherList)
        .catch((e) => console.log(e.response));
    case "teacherName":
      return AuthCampusSever.get(teacherQueryNameUrl + `=${keyword}`, config)
        .then((res) => res.data.teacherList)
        .catch((e) => console.log(e.response));
    default:
      return new Promise((resFunc, rejFunc) => {
        resFunc("Admin");
        rejFunc(new Error("Oops!"));
      });
  }
};
