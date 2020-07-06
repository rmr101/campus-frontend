import React from "react";
import studentService from "../../../../../../apis/studentService";
import Button from "./../../../../../Button";
import SearchBar from './../../../../../SearchBar';
import styles from "./StudentList.module.scss";

class StudentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }

  componentDidMount() {
    studentService
      .getAll()
      .then((response) => {
        this.setState({
          students: response.data.studentList,
        });
        console.log(this.state.students);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <div className={styles.wrapper}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.tr}>
                <th className={styles.th}>No.</th>
                <th className={styles.th}>Name</th>
                <th className={styles.th}>
                  <Button type={"CREATE"} />
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.students.map(function (student, index) {
                return (
                  <tr className={styles.tr} key={index}>
                    <td className={styles.td}>{index + 1}</td>
                    <td className={styles.td}>{student.name}</td>
                    <td className={styles.td}>
                      <Button type="UPDATE"></Button>
                    </td>
                    <td>
                      <Button type="DELETE"></Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default StudentList;
