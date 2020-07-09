// import CampusSever from "../../utils/CampusSever";
// import { Auth } from "../../utils/CampusSever/AuthenticatedAccess";
// import store from "../../store";

// // make it empty for now

// const teacherUrl = "teachers/";
// const studentUrl = "students/";
// const passwordUrl = "/password";

// export default (title, AC, content, courseID) => {
//   const state = store.getState();
//   const uuid = state.Authentication.uuid;
//   let url;
//   switch (state.Authentication.role) {
//     case "TEACHER":
//       url = teacherUrl;
//       break;
//     case "STUDENT":
//       url = studentUrl;
//       break;
//     default:
//       break;
//   }
//   const AuthCampusSever = Auth(CampusSever);
//   return AuthCampusSever.put(`${url}${uuid}${passwordUrl}`, {
//     currentPassword: oldPassword,
//     newPassword: newPassword,
//   });
// };
