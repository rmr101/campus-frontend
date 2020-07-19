import React from "react";
import { render} from "@testing-library/react";
import Content from "./Content";
import ToBeImplement from "./components/ToBeImplement";
import SubjectCourse from "./components/SubjectCourse";
import TeacherCourseAssignment from "./components/TeacherCourseAssignment";
import UserManagement from "./components/UserManagement";
import Profile from "./components/Profile";
import CourseDetail from "./components/CourseDetail";
import Dashboard from "./components/Dashboard";
import Assignment from "./components/Assignment";
import StudentAssignment from "./components/StudentAssignment";
import CourseManagement from "./components/CourseManagement";
import TeacherMarkingSystem from "./components/TeacherMarkingSystem";
import MarkingAssignment from "./components/MarkingAssignment";

jest.mock("./components/ToBeImplement", () =>jest.fn(() => "<TestingComponent />"));
jest.mock("./components/SubjectCourse", () =>jest.fn(() => "<TestingComponent />"));
jest.mock("./components/TeacherCourseAssignment", () =>jest.fn(() => "<TestingComponent />"));
jest.mock("./components/UserManagement", () =>jest.fn(() => "<TestingComponent />"));
jest.mock("./components/Profile", () =>jest.fn(() => "<TestingComponent />"));
jest.mock("./components/CourseDetail", () =>jest.fn(() => "<TestingComponent />"));
jest.mock("./components/Dashboard", () =>jest.fn(() => "<TestingComponent />"));
jest.mock("./components/Assignment", () =>jest.fn(() => "<TestingComponent />"));
jest.mock("./components/StudentAssignment", () =>jest.fn(() => "<TestingComponent />"));
jest.mock("./components/CourseManagement", () =>jest.fn(() => "<TestingComponent />"));
jest.mock("./components/TeacherMarkingSystem", () =>jest.fn(() => "<TestingComponent />"));;
jest.mock("./components/MarkingAssignment", () =>jest.fn(() => "<TestingComponent />"));


describe("<Content/>",()=>{

  it("should render ToBeImplement page when no match pageID", () => {
    render(<Content pageID={"TestingPage"} />);
    expect(ToBeImplement).toBeCalled();
  });
  it("should render SubjectCourse when 'SubjectCourse' is passed", () => {
    render(<Content pageID={"SubjectCourse"} />);
    expect(SubjectCourse).toBeCalled();
  });
  it("should render Dashboard when 'Dashboard' is passed", () => {
    render(<Content pageID={"Dashboard"} />);
    expect(Dashboard).toBeCalled();
  });
  it("should render UserManagement when 'Users' is passed", () => {
    render(<Content pageID={"Users"} />);
    expect(UserManagement).toBeCalled();
  });
  it("should render UserManagement when 'Users' is passed", () => {
    render(<Content pageID={"Users"} />);
    expect(UserManagement).toBeCalled();
  });
  it("should render CourseManagement when 'CourseManagement' is passed", () => {
    render(<Content pageID={"CourseManagement"} />);
    expect(CourseManagement).toBeCalled();
  });
  it("should render TeacherCourseAssignment when 'TeacherCourseAssignment' is passed", () => {
    render(<Content pageID={"TeacherCourseAssignment"} />);
    expect(TeacherCourseAssignment).toBeCalled();
  });
  it("should render TeacherMarkingSystem when 'TeacherMarkingSystem' is passed", () => {
    render(<Content pageID={"TeacherMarkingSystem"} />);
    expect(TeacherMarkingSystem).toBeCalled();
  });

  it("should render CourseDetail when 'CourseDetail' is passed", () => {
    render(<Content pageID={"CourseDetail"} />);
    expect(CourseDetail).toBeCalled();
  });
  it("should render Assignment when 'Assignment' is passed", () => {
    render(<Content pageID={"Assignment"} />);
    expect(Assignment).toBeCalled();
  });
  it("should render StudentAssignment when 'StudentAssignment' is passed", () => {
    render(<Content pageID={"StudentAssignment"} />);
    expect(StudentAssignment).toBeCalled();
  });
  it("should render Profile when 'UserInfo' is passed", () => {
    render(<Content pageID={"UserInfo"} />);
    expect(Profile).toBeCalled();
  });
  it("should render MarkingAssignment when 'MarkingAssignment' is passed", () => {
    render(<Content pageID={"MarkingAssignment"} />);
    expect(MarkingAssignment).toBeCalled();
  });
})

