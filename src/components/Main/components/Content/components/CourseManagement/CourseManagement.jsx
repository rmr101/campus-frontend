import React from "react";
import getUserQuery from "./../../../../../../apis/getCourseQuery";
import Button from "../../../../../Button";
import SearchBar from "../../../../../SearchBar";
import styles from "./UserManagement.module.scss";
import RenderContentLink from "./../RenderContentLink";
import NoContent from "../NoContent/NoContent";
import FullWidthLayout from "../../../../../Layout/FullWidthLayout";
import { connect } from "react-redux";

class UserManagement extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        search: "",
        filter: "Course ID",
        courseList: [],
        errors: "",
      };
      this.onSubmit = this.onSubmit.bind(this);
    }






}