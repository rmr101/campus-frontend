import React from 'react';
import axios from 'axios';
import RenderLink from '../RenderLink';
import CanvasLoading from '../CanvasLoading';



class CourseMarket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subjectList: null,
      loading: true,
    };
    this.finishLoading = this.finishLoading.bind(this);
  }

  finishLoading() {
    this.setState({ loading: false });
  }
  async getSubjectList() {
    await axios
      .get(`http://localhost:8080/subjects`)
      .then((res) => this.setState({ subjectList: res.data.subjectList },
        ()=>this.setState({loading:false})));
    console.log(this.state.subjectList);
  }
  componentDidMount() {
    this.getSubjectList();
  }


  render() {
    return this.state.loading ? (
      <CanvasLoading />
    ) : (
      <RenderLink
        onClick={this.props.onClick}
        RenderArray={this.state.subjectList}
        CurrentNavItem={"SubjectCourse"}
      />
    );
  }
};

export default CourseMarket;
