import React from 'react';
import RenderLink from '../RenderLink';
import CanvasLoading from '../CanvasLoading';
import getSubjectList from '../../../../../../../../apis/getSubjectList';


class Assignment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subjectList: null,
      loading: true,
    };
  }

  async getSubjectList() {
    const {subjectList} = await getSubjectList();
    this.setState(
      {subjectList: subjectList,
        loading: false});
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
        RenderArray={this.state.subjectList}
        toPageID={"SubjectCourse"}
      />
    );
  }
};


export default Assignment;
