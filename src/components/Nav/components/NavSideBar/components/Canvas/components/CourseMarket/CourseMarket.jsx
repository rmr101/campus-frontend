import React from 'react';
import axios from 'axios';


// const Loading =()=>(
//   <div className={styles.load}>
//     loading...
//   </div>
// )


class CourseMarket extends React.Component {
  
  constructor(props){
    super(props);
    this.state={
      subjectList:null,
    }

  }
  renderSubjects(){
    
  }
  async getSubjectList(){
  await axios
    .get(`http://localhost:8080/subjects`)
    .then((res) => this.setState({subjectList:res.data})
    // this.setState({subjectList: res.data.subjectList}
      );
      console.log(this.state.subjectList);

  }
  render(){
    this.getSubjectList();
    return <div>{}</div>;
}
};

export default CourseMarket;
