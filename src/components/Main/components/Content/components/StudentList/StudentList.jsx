import React from "react";
import Button from ".././Button";
import axios from "axios";


class StudentList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: [],
      };
    }
  
    componentDidMount() {
      axios.get(`http://localhost:8080/students`).then((res) => {
        this.setState({ items: res.data.studentList});
      });
    }
  
    render() {
      return (
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>StudentID</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th><Button type={"CREATE"} /></th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map(function (item, index) {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.uuid}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>
                  <React.Fragment>
                      <Button type="UPDATE"></Button>
                    </React.Fragment>
                  </td>
                  <td>
                  <React.Fragment>
                      <Button type="DELETE"></Button>
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


export default StudentList;
