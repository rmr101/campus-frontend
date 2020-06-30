import React from "react";
import styles from "./StudentDetail.module.scss";
import axios from "axios";
import Crud from "../../../Crud";
// import Button from "../../.././Button";


class StudentDetail extends React.Component {
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

  addItemToState = (item) => {
    this.setState(prevState => ({
      items: [...prevState.items, item]
    }))
  }

  updateState = (item) => {
    const itemIndex = this.state.items.findIndex(data => data.id === item.id)
    const newArray = [
    // destructure all items from beginning to the indexed item
      ...this.state.items.slice(0, itemIndex),
    // add the updated item to the array
      item,
    // add the rest of the items to the array from the index after the replaced item
      ...this.state.items.slice(itemIndex + 1)
    ]
    this.setState({ items: newArray })
    console.log({ items: newArray });
  }
  

  deleteItemFromState = (id) => {
    const updatedItems = this.state.items.filter(item => item.id !== id)
    this.setState({ items: updatedItems })
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
            <th>action</th>
            {/* <th><Button type={"CREATE"} /></th> */}
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
                    <Crud buttonLabel="Edit" item={item} updateState={this.props.updateState} />
                  </React.Fragment>
                </td>
                <td>
                  <React.Fragment>
                  <Crud buttonLabel="Delete" item={item.uuid} />
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
