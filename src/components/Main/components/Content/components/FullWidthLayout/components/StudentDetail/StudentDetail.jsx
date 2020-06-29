import React from "react";
import styles from "./StudentDetail.module.scss";
import axios from "axios";
import Button from "./../../../Button";

class StudentDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
    };
  }

  async postStudent(){
    await axios.post(
      "http://localhost:8080/users/students",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    this.GetRequest();
  }


  GetRequest = () =>{
    axios.get(`http://localhost:8080/students`).then((res) => {
    this.setState({ persons: res.data.studentList});
  });}

  


  // componentDidMount() {
  //   axios.get(`http://localhost:8080/students`).then((res) => {
  //     this.setState({ persons: res.data.studentList});
  //   });
  // }
   
  // componentWillUnmount() {
  //   this.timer = null;
  // }


  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>StudentID</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>        </th>
            <th><Button type={"CREATE"} /></th>
          </tr>
        </thead>
        <tbody>
          {this.state.persons.map(function (person, index) {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{person.uuid}</td>
                <td>{person.firstName}</td>
                <td>{person.lastName}</td>
                <td>
                  <React.Fragment>
                    <Button type={"UPDATE"} />
                  </React.Fragment>
                </td>
                <td>
                  <React.Fragment>
                    <Button type={"DELETE"} />
                  </React.Fragment>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default StudentDetail;
