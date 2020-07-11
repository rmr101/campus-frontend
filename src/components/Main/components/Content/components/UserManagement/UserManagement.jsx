import React from "react";
import getUserQuery from "./../../../../../../apis/getUserQuery";
import Button from "../../../../../Button";
import SearchBar from "../../../../../SearchBar";
import styles from "./UserManagement.module.scss";
import FullWidthLayout from "../../../../../Layout/FullWidthLayout";

class UserManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      role: "student",
      nameList: [],
      errors: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  async getUserName(role) {
    const validStudentIdRegex = RegExp(/^(s[0-9]*)$/);
    const validStudentNameRegex = RegExp(/^([a-zA-Z]*)$/);
    const validTeacherIdRegex = RegExp(/^(t[0-9]*)$/);
    const validTeacherNameRegex = RegExp(/^([a-zA-Z]*)$/);
    switch (role) {
      case "student":
        if (validStudentIdRegex.test(this.state.search) === true) {
          const nameList = await getUserQuery("studentId", this.state.search);
          console.log(nameList);
          this.setState({
            nameList: nameList,
          });
        } else if (validStudentNameRegex.test(this.state.search) === true) {
          const nameList = await getUserQuery("studentName", this.state.search);
          console.log(nameList);
          this.setState({
            nameList: nameList,
          });
        } else {
          this.setState({
            errors: "Please check the StudentID!",
          });
        }
        break;
      case "teacher":
        if (validTeacherIdRegex.test(this.state.search) === true) {
          const nameList = await getUserQuery("teacherId", this.state.search);
          console.log(nameList);
          this.setState({
            nameList: nameList,
          });
        } else if (validTeacherNameRegex.test(this.state.search) === true) {
          const nameList = await getUserQuery("teacherName", this.state.search);
          console.log(nameList);
          this.setState({
            nameList: nameList,
          });
        } else {
          this.setState({
            errors: "Please check the TeacherID!",
          });
        }
        break;
      default:
    }
  }

  async onSubmit(e) {
    e.preventDefault();
    if (this.state.search === "") {
      this.setState({
        errors: "Please Input Something!",
      });
    } else if (this.state.errors === "") {
      await (console.log(this.state.role), this.getUserName(this.state.role));
    }
  }

  handleRoleTemp = (role) => {
    this.setState({
      role: role,
    });
    console.log(this.state.role);
  };

  handleSearchTemp = (search) => {
    let errors = this.state.errors;
    const validInputRegex = RegExp(/^[a-zA-Z0-9]+$/);
    errors = validInputRegex.test(search) ? "" : "Invalid Input!";
    this.setState({
      errors: errors,
      search: search,
    });
    console.log(this.state.search, this.state.errors);
  };

  ValidateInput(errors) {}

  render() {
    return (
      <FullWidthLayout>
        <div>
          <SearchBar
            search={this.state.search}
            onSearchChange={this.handleSearchTemp}
            role={this.state.role}
            onRoleChange={this.handleRoleTemp}
            onClick={this.onSubmit}
            errors={this.state.errors}
          />
          <div className={styles.create}>
            <Button type={"CREATE"} />
          </div>
          <div className={styles.wrapper}>
            <table className={styles.table}>
              <thead>
                <tr className={styles.tr}>
                  <th className={styles.th}>No.</th>
                  <th className={styles.th}>Name</th>
                  <th className={styles.th}></th>
                </tr>
              </thead>
              <tbody>
                {this.state.nameList.length < 1 ? (
                  <tr>
                    <td>
                      <h3>There is no such user!</h3>
                    </td>
                  </tr>
                ) : (
                  (console.log(this.state.nameList),
                  this.state.nameList.map(function (user, index) {
                    return (
                      <tr className={styles.tr} key={index}>
                        <td className={styles.td}>{index + 1}</td>
                        <td className={styles.td}>{user.name}</td>
                      </tr>
                    );
                  }))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </FullWidthLayout>
    );
  }
}

export default UserManagement;
