import React from "react";
import styles from "./StudentDetail.module.scss";
import axios from "axios";

// const StudentDetail = ({title,type}) => {
//   console.log(type);
//   return (
//     <div>
//         test
//     </div>)
// }
class StudentDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons:[],
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/students`)
      .then(res => {
        this.setState({persons:res.data.studentList});
      })
      
  }


  render() {
    return (
      <table >
        <thead>
          <tr>
            <th>No.</th>
            <th>StudentID</th>
            <th>Name</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {
                this.state.persons.map(function(person,index) {
                   return <tr key={index} >
                            <td>{index+1}</td>
                            <td>{person.uuid}</td>
                            <td>{person.name}</td>
                            <td>
                              {/* <span onClick={this.updatePost.bind(this,post._id)} ></span> */}
                              <button>update</button>
                            </td>
                            <td>
                              <button>delete</button>
                            </td>
                          </tr>
                })
              }
        </tbody>
      </table>
    );
  }
}

export default StudentDetail;
